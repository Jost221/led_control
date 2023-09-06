pub struct Color{
    r: u8,
    g: u8,
    b: u8,
}

pub struct Settings {
    pub port_name: String,
    pub mode: u8,
    pub color: Color,
    pub brightness: u8,
    pub delay: u16
}

impl Color {
    pub fn getValue(&mut self) -> vec{
        vec![self.r, self.g, self.b]
        
    }
}