use serialport;
use String;

mod controllerSettings;

pub struct Controller{
    _port: Box<dyn serialport::SerialPort>,
    control: controllerSettings::Settings,
}

impl Controller {
    pub fn new(port_name: String, rate: u32) -> Controller{
        Controller {
            _port: Box::new(serialport::new(port_name, rate).unwrap()),
            control: controllerSettings::Settings::new(),
        }
    }

    pub fn export_json(&mut self) -> String {
        serde_json::to_string(&self.control);
    }

    pub fn set_color(&mut self, code: String) -> Result<(), String> {
        match self.control.set_color_code(code) {
            Ok(_) => Ok(()),
            Err(e) => e.to_string()
        }
    }
    // pub fn send_mode(&mut self){
    //     self._port
    //         .write(&[0 as u8, self.control.mode])
    //         .expect("error send to");
    // }

    // pub fn send_color(&mut self){
    //     let color_rgb = &[1 as u8, self.control.color.r, self.control.color.g, self.control.color.b];
    //     println!("color = {:?}", color_rgb);
    //     // return;
    //     self._port
    //         .write(color_rgb)
    //         .expect("error send to");
    // }

    // pub fn send_brightnes(&mut self){
    //     println!("brightnes = {:?}", &[2 as u8, self.control.brightness]);
    //     // return;
    //     self._port
    //         .write(&[2 as u8, self.control.brightness])
    //         .expect("error send to");
    // }

    // pub fn send_delay(&mut self){
    //     let mut delay = self.control.delay.to_string().as_bytes().to_vec();
    //     delay.insert(0, 3);
    //     println!("delay = {:?}", delay);
    //     self._port
    //         .write(&delay[..])
    //         .expect("error send delay");

    // }

    // pub fn set_delay(&mut self, val: u16){
    //     self.delay = val;
    //     self.send_delay();
    // }

    // pub fn set_port(&mut self, port_name: String, rate: u32){
    //     println!("{} {}", port_name, self.control.port_name);
    //     if port_name != self.control.port_name {
    //         self.port_name = port_name;
    //         println!("set_port");
    //         self._port = serialport::new(self.control.port_name.clone(), rate)
    //             .open()
    //             .expect("error open port");
    //     }
    // }

    // pub fn set_mode(&mut self, mode: u8){
    //     self.control.set_mode(mode);
    // }

    // pub fn set_rgb(&mut self, r: u8, g:u8, b:u8){
    //     self.set_color(Color{r, g, b})
    // }

    // pub fn set_code(&mut self, color: String){
    //     let code = &color[1..];
    //     self.set_rgb(
    //         u8::from_str_radix(&code[..2], 16).unwrap(), 
    //         u8::from_str_radix(&code[2..4], 16).unwrap(), 
    //         u8::from_str_radix(&code[4..], 16).unwrap()
    //     )
    // }

    // pub fn set_brightnes(&mut self, brightness: u8){
    //     self.brightness = brightness;
    //     self.send_brightnes()
    // }

    // pub fn read(&mut self) -> Vec<u8>{
    //     let mut serial_buf: Vec<u8> = vec![0; 32];
    //     self._port.read(serial_buf.as_mut_slice()).expect("Found no data!");
    //     serial_buf
    // }
}

pub fn ports_names() -> Vec<String>{
    let ports = serialport::available_ports().expect("No ports found!");
    let mut ports_name: Vec<String> = Vec::new();
    for p in ports {
        ports_name.push(p.port_name);
    }
    ports_name
}