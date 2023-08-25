// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod base_variables;

use once_cell::sync::Lazy;
use serde_json::json;
use std::time::{Duration, Instant};

#[cfg(target_os = "windows")]
static mut CONTROLLER:  Lazy<base_variables::Controller> = Lazy::new(|| {
    base_variables::Controller::new("COM1".to_string(), 9_600)
});

#[cfg(target_os = "linux")]
static mut CONTROLLER:  Lazy<base_variables::Controller> = Lazy::new(|| {
    base_variables::Controller::new("/dev/ttyUSB0".to_string(), 9_600)
});

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
// #[tauri::command]
// fn greet(name: &str) -> String {
//     format!("Hello, {}! You've been greeted from Rust!", name)
// }


#[tauri::command]
fn set_mode(mode_index: i16) {
    println!("{}", mode_index);
    unsafe{
        CONTROLLER.set_mode(mode_index as u8);
    }
}

#[tauri::command]
fn set_color(color_code: &str){
    unsafe{
        CONTROLLER.set_code(color_code.to_string());
    }
}

#[tauri::command]
fn set_delay(delay: u16){
    unsafe{
        CONTROLLER.set_delay(delay);
    }
}

#[tauri::command]
fn set_brightnes(brightnes: u8){
    unsafe{
        CONTROLLER.set_brightnes(brightnes);
    }
}

#[tauri::command]
fn set_port(port_name: &str){
    unsafe{
        CONTROLLER.set_port(port_name.to_string(), 9_600)
    }
}

#[tauri::command]
fn get_ports() -> String{
    let ports = base_variables::ports_names();
    let json_ports = json!(ports).to_string();
    json_ports
}

#[tauri::command]
fn send_mode(){
    unsafe{
        CONTROLLER.send_mode();
    }
}

fn main() {
    println!("Start");

    set_port("COM11");
    let start_time = Instant::now();
    let duration = Duration::from_secs(1);

    loop {
        if Instant::now() - start_time >= duration {
            println!("Timer expired!");
            break;
        }
    }
    set_mode(31);
    set_color("#ffff00");
    send_mode();
    set_brightnes(255);

    // loop {
    //     unsafe {
    //         print!("{}", String::from_utf8(CONTROLLER.read()).unwrap());
    //     }
    // }
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![set_mode, set_color, set_brightnes, set_port, get_ports, send_mode, set_delay])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}