const { invoke } = window.__TAURI__.tauri;

export async function get_ports() {
  return JSON.parse(await invoke("get_ports"));
}

export async function set_port(portName) {
  await invoke("set_port", { portName: portName });
  console.log('set port')
}

export async function set_mode(numMode) {
  console.log('set mode ' + numMode)
  await invoke("set_mode", { modeIndex: Number(numMode) });
  
}


export async function set_color(color) {
  await invoke("set_color", { colorCode: color.toString(16) });
}

export async function set_brightnes(brightnes) {
  await invoke("set_brightnes", { brightnes: Number(brightnes) });
}

export async function set_delay(delay) {
  await invoke("set_delay", { delay: Number(delay) })
}