use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Default)]
pub struct Color{
    pub r: u8,
    pub g: u8,
    pub b: u8,
}

#[derive(Serialize, Deserialize)]
pub struct Settings {
    pub port_name: String,
    pub mode: u8,
    pub color: Color,
    pub brightness: u8,
    pub delay: u16
}


impl Color {
    pub fn set_rgb(&mut self, r: u8, g: u8, b: u8) {
        self.r = r;
        self.g = g;
        self.b = b;
    }

    pub fn set_code(&mut self, code: String) -> Result<(), String> {
        if code.len() > 7 {
            return Err("Ошибка преобразвания данных: длинна код цвета должна быть 7 символов (вкелючая '#')".to_string());
        }
        let color = &code[1..];
        let mut rgb = [0 as u8; 3];
        for i in 0..3 {
            match u8::from_str_radix(&code[i*2..(i+1)*2], 16) {
                Ok(v) => rgb[i] = v,
                Err(_) => return Err("Ошибка преобразвания данных: длинна код цвета должна быть 7 символов (вкелючая '#')".to_string())
            };
        }
        self.set_rgb(rgb[0], rgb[1], rgb[2]);
        Ok(())
    }
}

impl Settings {
    #[cfg(target_os = "windows")]
    pub fn new() -> Settings {
        Settings {
            port_name: "COM1".to_string(),
            mode: 0,
            color: Color::default(),
            brightness: 255,
            delay: 100
        }
    }

    #[cfg(target_os = "linux")]
    pub fn new() -> Settings {
        Settings {
            port_name: "/dev/ttyUSB0".to_string(),
            mode: 0,
            color: Color::default(),
            brightness: 255,
            delay: 100
        }
    }

    pub fn set_mode(&mut self, mode: u8) -> Result<&mut Settings, String> {
        if mode > 41{
            return Err("Ошибка задания режима работы. Допустимые значения: 0-41".to_string());
        }
        self.mode = mode;
        Ok(self)
    }

    pub fn set_color_rgb(&mut self, r: u8, g: u8, b: u8) -> &mut Settings {
        self.color.set_rgb(r, g, b);
        self
    }

    pub fn set_color_code(&mut self, code: String) -> Result<&mut Settings, String> {
        match self.color.set_code(code) {
            Ok(()) => Ok(self),
            Err(e) => Err(e.to_string())
        }
    }
}