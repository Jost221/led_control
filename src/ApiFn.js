const { invoke } = window.__TAURI__.tauri;

export async function get_ports() {
  var items = JSON.parse(await invoke("get_ports"));
  console.log('updat port')
  selects.innerHTML = '';
  selects.innerHTML += `<option>Выберете порт</option>`
  for (let i = 0; i < items.length; i++) {
    selects.innerHTML += `<option>${items[i]}</option>`
  }
}

export async function set_port() {
  await invoke("set_port", { portName: selects.value });
  console.log('set port')
}

export async function set_mode(numMode) {
  await invoke("set_mode", { modeIndex: Number(numMode) });
  console.log('set mode ' + numMode)
}


export async function set_color(color) {
  await invoke("set_color", { colorCode: color.toString(16) });
}

export async function set_brightnes() {
  await invoke("set_brightnes", { brightnes: Number(brightnesSlider.value) });
}

export async function set_delay(value) {
  await invoke("set_delay", { delay: Number(value) })
}