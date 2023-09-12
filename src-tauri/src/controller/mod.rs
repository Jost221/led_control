use serialport;
use String;
use std::thread;
use std::time::Duration;

mod controller_settings;

pub struct Controller{
    _port: Box<dyn serialport::SerialPort>,
    control: controller_settings::Settings,
}

impl Controller {
    pub fn new(port_name: String, rate: u32) -> Result<Controller, String>{
        let mut controller = Controller {
            _port: match serialport::new(port_name.to_string(), rate).open() {
                Ok(v) => v,
                Err(_) =>  return Err("Ошибка открытия стандартного порта. Проверьте уровень доступа программы".to_string()),
            },
            control: controller_settings::Settings::new(),
        };
        controller.control.port_name = port_name;
        Ok(controller)
    }

    pub fn export_json(&mut self) -> String {
        match serde_json::to_string(&self.control){
            Ok(v) => v,
            Err(_) => {
                println!("Error get data");
                String::new()
            },
        }
    }
    pub fn import_json(&mut self, data: String) -> Result<(), String> {
        match serde_json::from_str(&data) {
            Ok(v) => {
                self.control = v;
                return self.switch_port(self.control.port_name.to_string(), 9_600);
            },
            Err(_) => return Err("the file contains incorrect information".to_string()),
        };
    }

    fn send(&mut self, station: u8, mut data: Vec<u8>) -> Result<(), String>{
        data.insert(0, station);
        println!("{:?}", &data[..]);
        match self._port.write(&data[..]) {
            Ok(_) => Ok(()),
            Err(_) =>Err("Ошибка отправки данных в порт. Проверьте уровень доступа программы".to_string()),
        }
    }

    pub fn send_mode(&mut self) -> Result<(), String>{
        return self.send(0, [self.control.mode].to_vec());
    }

    pub fn send_color(&mut self) -> Result<(), String>{
        return self.send(1, [self.control.color.r,self.control.color.g,self.control.color.b].to_vec());
    }

    pub fn send_brightnes(&mut self) -> Result<(), String>{
        return self.send(2, [self.control.brightness].to_vec());
    }

    pub fn send_delay(&mut self) -> Result<(), String>{
        let delay = self.control.delay.to_string().as_bytes().to_vec();
        self.send(3, delay)
    }

    pub fn set_mode(&mut self, mode: u8) -> Result<(), String>{
        match self.control.set_mode(mode) {
            Ok(_) => Ok(()),
            Err(e) => Err(e.to_string())
        }
    }

    pub fn set_color(&mut self, code: String) -> Result<(), String> {
        match self.control.set_color_code(code) {
            Ok(_) => self.send_color(),
            Err(e) => return Err(e.to_string()),
        }
    }

    pub fn set_brightness(&mut self, brightness: u8) -> Result<(), String> {
        self.control.brightness = brightness;
        self.send_brightnes()
    }

    pub fn set_delay(&mut self, milliseconds: u16) -> Result<(), String> {
        self.control.delay = milliseconds;
        self.send_delay()
    }
    
    pub fn switch_port(&mut self, port_name: String, rate: u32) -> Result<(), String> {
        match self._port.name() {
            Some(v) => {
                if v == port_name {
                    return Ok(());
                } else {
                    self.control.port_name = port_name.to_string();
                }
            }
            _ => {},        
        }
        self._port = match serialport::new(port_name, rate).open() {
            Ok(v) => v,
            Err(_) => return Err("Ошибка открытия стандартного порта. Проверьте уровень доступа программы".to_string()),
        };
        self.send_delay()?;
        thread::sleep(Duration::from_millis(200));
        self.send_brightnes()?;
        thread::sleep(Duration::from_millis(200));
        self.send_color()?;
        thread::sleep(Duration::from_millis(200));
        self.send_mode()?;
        Ok(())
    }
}

pub fn ports_names() -> Vec<String>{
    let ports = serialport::available_ports().expect("No ports found!");
    let mut ports_name: Vec<String> = Vec::new();
    for p in ports {
        ports_name.push(p.port_name);
    }
    ports_name
}