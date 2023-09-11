const { invoke } = window.__TAURI__.tauri;

export async function get_ports() {
  return JSON.parse(await invoke("get_ports"));
}

export async function set_port(portName) {
  try {
    await invoke("set_port", { portName: portName });
  } catch (error) {
    alert(error)
  }
}

export async function set_mode(numMode) {
  try{
    await invoke("set_mode", { modeIndex: Number(numMode) });
  } catch (error) {
    alert(error)
  }
}

export async function send_mode() {
  try{
    await invoke("send_mode");
  } catch (error) {
    alert(error)
  }
}

export async function set_color(color) {
  try{
    await invoke("set_color", { colorCode: color.toString(16) });
  } catch (error) {
    alert(error)
  }
}

export async function set_brightnes(brightnes) {
  try{
    await invoke("set_brightness", { brightness: Number(brightnes) });
  } catch (error) {
    alert(error)
  }
}

export async function set_delay(delay) {
  try{
    await invoke("set_delay", { delay: Number(delay) })
  } catch (error) {
    alert(error)
  }
}