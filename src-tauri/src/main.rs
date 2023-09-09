// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "linux")]

mod controller;

use once_cell::sync::Lazy;
use serde_json::json;
use std::fs::File;
use std::io::Write;

#[cfg(target_os = "windows")]
static mut CONTROLLER:  Lazy<controller::Controller> = Lazy::new(|| {
    match controller::Controller::new("COM1".to_string(), 9_600) {
        Ok(v) => v,
        Err(e) => panic!("{}", e)
    }
});

#[cfg(target_os = "linux")]
static mut CONTROLLER:  Lazy<controller::Controller> = Lazy::new(|| {
    match controller::Controller::new("/dev/ttyUSB0".to_string(), 9_600) {
        Ok(v) => v,
        Err(e) => panic!("{}", e)
    }
});

#[tauri::command]
fn set_mode(mode_index: i16) -> Result<(), String> {
    // println!("{}", mode_index);
    unsafe{
        CONTROLLER.set_mode(mode_index as u8)
    }
}

#[tauri::command]
fn send_mode() -> Result<(), String>{
    unsafe{
        CONTROLLER.send_mode()
    }
}

#[tauri::command]
fn set_color(color_code: &str) -> Result<(), String>{
    unsafe{
        CONTROLLER.set_color(color_code.to_string())
    }
}

#[tauri::command]
fn set_delay(delay: u16) -> Result<(), String>{
    unsafe{
        CONTROLLER.set_delay(delay)
    }
}

#[tauri::command]
fn set_brightness(brightness: u8) -> Result<(), String>{
    unsafe{
        CONTROLLER.set_brightness(brightness)
    }
}

#[tauri::command]
fn set_port(port_name: &str) -> Result<(), String>{
    unsafe{
        CONTROLLER.switch_port(port_name.to_string(), 9_600)
    }
}

#[tauri::command]
fn get_ports() -> String{
    let ports = controller::ports_names();
    let json_ports = json!(ports).to_string();
    json_ports
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            set_mode, 
            set_color, 
            set_brightness, 
            set_port, 
            get_ports, 
            set_delay, 
            send_mode
            ])
        .on_window_event(|event| match event.event() {
                tauri::WindowEvent::Destroyed => {
                    let file = File::create("settings.data").unwrap();
                    // file.write_all(CONTROLLER.)
                }
                 _ => {}
               }) 
        .run(tauri::generate_context!())
        .expect("error while running tauri application");

}