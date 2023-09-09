use serialport;
use String;

mod controllerSettings;

pub struct Controller{
    _port: Box<dyn serialport::SerialPort>,
    control: controllerSettings::Settings,
}

impl Controller {
    pub fn new(port_name: String, rate: u32) -> Result<Controller, String>{
        let mut controller = Controller {
            _port: match serialport::new(port_name.to_string(), rate).open() {
                Ok(v) => v,
                Err(_) =>  return Err("Ошибка открытия стандартного порта. Проверьте уровень доступа программы".to_string()),
            },
            control: controllerSettings::Settings::new(),
        };
        controller.control.port_name = port_name;
        Ok(controller)
    }

    pub fn export_json(&mut self) -> Result<String, String> {
        match serde_json::to_string(&self.control){
            Ok(v) => Ok(v),
            Err(_) => Err("Error get data".to_string())
        }
    }

    fn send(&mut self, station: u8, mut data: Vec<u8>) -> Result<(), String>{
        data.insert(0, station);
        match self._port.write(&data[..]) {
            Ok(v) => Ok(()),
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
            Ok(v) => Ok(()),
            Err(v) => Err(v.to_string())
        }
    }

    pub fn set_color(&mut self, code: String) -> Result<(), String> {
        match self.control.set_color_code(code) {
            Ok(v) => self.send_color(),
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
        self._port = match serialport::new(port_name, rate).open() {
            Ok(v) => v,
            Err(_) => return Err("Ошибка открытия стандартного порта. Проверьте уровень доступа программы".to_string()),
        };
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