use serde::{Serialize, Deserialize, de::Error};

#[derive(Serialize, Deserialize, Default)]
pub struct Color{
    r: u8,
    g: u8,
    b: u8,
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
    pub fn new(r: u8, g: u8, b: u8) -> Color{

    }

    pub fn getValue(&mut self) -> &[u8]{
        &[self.r, self.g, self.b]
    }

    pub fn setRGB(&mut self, r: u8, g: u8, b: u8) {
        self.r = r;
        self.g = g;
        self.b = b;
    }

    pub fn setCode(&mut self, code: String) {
        if code.len() > 7 {
            panic!("Ошибка преобразвания данных: длинна код цвета должна быть 7 символов (вкелючая '#')")
        }
        let color = &code[1..];
        let mut rgb = [0 as u8; 3];
        for i in 0..3 {
            match u8::from_str_radix(&code[i*2..(i+1)*2], 16) {
                Ok(v) => rgb[i] = v,
                Err(_) => panic!("Не удалось преобразовать числа в HEX"),
            };
        }
        self.setRGB(rgb[0], rgb[1], rgb[2])
    }
}