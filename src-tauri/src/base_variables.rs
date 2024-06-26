//
// ranges modivicartor
// mode: 0
// color: 1
// brightness: 2
//

use serialport;
use String;
use std::time::Duration;

pub struct Color{
    r: u8,
    g: u8,
    b: u8,
}

pub struct Controller{
    port_name: String,
    _port: Box<dyn serialport::SerialPort>,
    mode: u8,
    color: Color,
    brightness: u8,
    delay: u16
}

impl Controller{
    pub fn new(port_name: String, rate: u32) -> Controller{
        Controller {
            port_name: port_name.clone(),
            _port : serialport::new(port_name, rate)
                    .timeout(Duration::from_millis(100))
                    .open()
                    .expect("Failed to open port"),
            mode : 2,
            color : Color{
                r : 0,
                g : 0,
                b : 0
            },
            brightness : u8::MAX,
            delay: 100
        }
    }

    pub fn send_mode(&mut self){

        self._port
            .write(&[0u8, self.mode])
            .expect("error send to");
    }

    pub fn send_color(&mut self){
        let color_rgb = &[1 as u8, self.fix_value(self.color.r), self.fix_value(self.color.g), self.fix_value(self.color.b)];

        self._port
            .write(color_rgb)
            .expect("error send to");
    }

    pub fn send_brightnes(&mut self){
        self._port
            .write(&[2 as u8, self.brightness])
            .expect("error send to");
    }

    pub fn send_delay(&mut self){
        let mut delay = self.delay.to_string().as_bytes().to_vec();
        delay.insert(0, 3);
        self._port
            .write(&delay[..])
            .expect("error send delay");

    }

    pub fn set_delay(&mut self, val: u16){
        self.delay = val;
        self.send_delay();
    }

    pub fn set_port(&mut self, port_name: String, rate: u32){
        if port_name != self.port_name {
            self.port_name = port_name;
            self._port = serialport::new(self.port_name.clone(), rate)
                .open()
                .expect("error open port");
        }
    }

    pub fn set_mode(&mut self, mode: u8){
        self.mode = mode;
    }

    pub fn set_color(&mut self, color: Color){
        self.color = color;
        self.send_color();
        // self.send();
    }

    pub fn set_rgb(&mut self, r: u8, g:u8, b:u8){
        self.set_color(Color{r, g, b})
    }

    pub fn set_code(&mut self, color: String){
        let code = &color[1..];
        self.set_rgb(
            u8::from_str_radix(&code[..2], 16).unwrap(), 
            u8::from_str_radix(&code[2..4], 16).unwrap(), 
            u8::from_str_radix(&code[4..], 16).unwrap()
        )
    }

    pub fn set_brightnes(&mut self, brightness: u8){
        self.brightness = brightness;
        self.send_brightnes()
        // self.send();
    }

    fn fix_value(&mut self, value: u8) -> u8{
        if value < 4 {
            return 4u8
        }
        value
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