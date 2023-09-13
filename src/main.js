const { invoke } = window.__TAURI__.tauri;

import {
  view_leds, rainbow, transfusion, rainbowSlider, rainbowTrain,
  verticalRainbow, redToRainbow, reversRainbowWave, lotsOfRainbowDots,
  randomizer, runRedBlue, runRedBlueTrace, russia, randomPop, policeLight,
  rgb_sectors, fier, pulseColor, white_temps, drop_value, whiteFlashesOnWhite,
  runRed, runRedTrain, flickerRed, setColor, pulseToRedColor, wormtToCenter,
  runRedLoop, bigSinus, jumpFromCenter, runRandomDote, longWorm, actual_to_start,
  actual_to_end, runWorm, smallFastSinusTrain, lotsOfRedDots, randomRed,
  sinusTrain, doteToCenter, flickering, bouncingBalls, one_color_all_code
} from './mods.js'


// let greetInputEl;
// let greetMsgEl;

// async function greet() {
//   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//   greetMsgEl.textContent = await invoke("biba", { x: Number(greetInputEl.value)});
// }

async function get_ports() {
  var items = JSON.parse(await invoke("get_ports"));
  console.log('updat port')
  selects.innerHTML = '';
  selects.innerHTML += `<option>Выберете порт</option>`
  for (let i = 0; i < items.length; i++) {
    selects.innerHTML += `<option>${items[i]}</option>`
  }
}

async function set_port() {
  await invoke("set_port", { portName: selects.value });
  console.log('set port')
}

async function set_mode(numMode) {
  await invoke("set_mode", { modeIndex: Number(numMode) });
  console.log('set mode ' + numMode)
}

async function send_mode() {
  await invoke("send_mode");
}

async function set_color() {
  console.log(colorInput.value)
  await invoke("set_color", { colorCode: colorInput.value })
}

async function set_brightnes() {
  await invoke("set_brightnes", { brightnes: Number(brightnesSlider.value) });
}

async function set_delay(value) {
  await invoke("set_delay", { delay: Number(value) })
}
// window.addEventListener("DOMContentLoaded", () => {
//   greetInputEl = document.querySelector("#greet-input");
//   greetMsgEl = document.querySelector("#greet-msg");
//   document.querySelector("#greet-form").addEventListener("submit", (e) => {
//     e.preventDefault();
//     greet();
//   });
// });

let colorInput;
let brightnesSlider;

let styleColor;
let styleBrightnes;

let dropColor;

let selects;
let sendButton;

let btnDW;
let btnSM;

const displayWork = ['ON', 'OFF'];
const statusMode = ['CONT', 'STOP'];
let dw = 1;
let sm = 1;
let last = document.createElement('button'); // костыль, но иначе не работает

let timer;
let lastMode;

let update_port = true;


const mods = [
  // rainbow
  'Радуга', 'Статический цвет', 'Переливка', 'Радуга волнами', ' Бегущие цвета', 'Радуга волнами к центру',
  'Красный-радуга', 'Обратная радуга', 'Радуга с промежутком',
  // anather_colors
  'Слйчайные цвета', 'Бегуший С/К', 'Вращабщийся С/К', 'Бегущий патриотизм',
  'Случайные мерцания', 'Полицейские мигалки', 'РГБ по кругу', 'Огонь',
  'Переливка\nбелый-случайный', 'Оттенки белого',
  // static_color
  'Вспышки цвета на фоне', 'Бегающий огонёк', 'Бегущий червяк', 'Мерцание цвета',
  'Плавное\nвозгараие/затухание', 'Черви к центру',
  'Бегущий огонёк по кругу', 'Большой червь', 'Прыгающая волна из центра',
  'Бегущие светодиоды', 'Длинный поезд', 'Червь в лево-право', 'Черви влево',
  'Цвет с промежутком', 'Случайные возгарания цвета', 'Черви волнами', 'Огоньки к центру',
  'Жёсткие\nмерцания цвета', 'Прыгающик мячики\n(На ленте лучше)',
]

const mods_comment = [
  'Плавная радужная переливка', 'Статически заданный цвет', 'Плавная переливка всей ленты',
  'Радужная переливка с поочерёдным заполнение светодиодов',
  'Случайные светодиоды бегущие друг за другом', 'Радужная переливка с заполнением к центру',
  'Плавная переливка от красного к случаному цвету', 'Плавная радужная переливка влево',
  'Радужная переливка с промежутком в 2 светодиода',
  'Заполнение случаного светодиода случайным цветом',
  'Бегущие по кругу друг за другом синий и красный светодиод',
  'Заполнение ленты бегущими синим и красным цветом',
  'Поочерёдно бегущие белый синий красный светодиоды',
  'Случайное появление и угасание светодиодов', 'Аналог полицейских проблесковых маячков',
  'Бегущие по кругу красный зелёный синий', 'Имитация горения огня\n(на ленте выглядит красивее)',
  'Плавная переливка от белого к случаному цвету',
  'Отображение оттенков белого цвета разного уровня теплоты',
  'Изменение яркости горения случайного светодиода',
  'Бегущий огонёк заданного цвета', 'Бегущая синусойда заданного цвета',
  'Случайное изменение яркости выбранного цвета',
  'Плавное имезменение яркости выбранного цвета',
  'Движение синусойд выбранного цвета к центру\n(на ленте выглядит понятнее)',
  'Бегущий огонёк заданного цвета по кругу', 'Огромная синусойда выбранного цвета',
  'Плавная волна случайно изменающая свои размеры (на ленте реализованно плавнее, с js я не сосбо подружился)',
  'Слйайно появляющиеся светодиоды бегущие вправо',
  'Появление волны случйного размера двигающейся вправо',
  'Бегущая синусойда', 'Синусойды заданого цвета двигающиеся влево',
  'Светодиоды заданного цвета направленные влево с промежутком в 2 светодиода',
  'Случайное появляение заданного цвета случайной яркости',
  'Поочерёдное заполнение ленты синсуойдами заданного цвета ',
  '2 светодиода заданного цвета бегущие к центру',
  'Случайное появление/исчезновение заданного цвета',
  'Прыгающие мячики (js не зорчет нормально отображать, в прошивке на ленты необзодиво изменить переменную "BallCount")'
]

const view_mods = [() => { }, rainbow, one_color_all_code, transfusion, rainbowSlider, rainbowTrain,
  verticalRainbow, redToRainbow, reversRainbowWave, lotsOfRainbowDots,
  randomizer, runRedBlue, runRedBlueTrace, russia, randomPop, policeLight,
  rgb_sectors, fier, pulseColor, white_temps, whiteFlashesOnWhite, runRed,
  runRedTrain, flickerRed, pulseToRedColor, wormtToCenter, runRedLoop, bigSinus,
  jumpFromCenter, runRandomDote, longWorm, runWorm, smallFastSinusTrain,
  lotsOfRedDots, randomRed, sinusTrain, doteToCenter, flickering, bouncingBalls,

  actual_to_start, actual_to_end
]

function viewSlider() {
  // styleColor.innerHTML = `#color::-webkit-slider-thumb { background-color: hsl(${colorSlider.value}, 100%, 50%); }\n`;
  // styleColor.innerHTML += `#color::-moz-range-thumb { background-color: hsl(${colorSlider.value}, 100%, 50%); }\n`;
  styleColor.innerHTML = `#brightnes{ background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, ${colorInput.value} 100%); }\n`;
  styleColor.innerHTML += `#brightnes::-webkit-slider-thumb { background-color: ${colorInput.value + Number(brightnesSlider.value).toString(16)}; }\n`;
  styleColor.innerHTML += `#brightnes::-moz-range-thumb { background-color: ${colorInput.value + Number(brightnesSlider.value).toString(16)}; }\n`;
}

window.addEventListener("DOMContentLoaded", () => {
  setup();
});

function setup() {
  var mods_container = document.querySelector('.mods');
  var view = document.querySelector('.view');

  for (let index = 0; index < mods.length; index++) {
    const element = mods[index];
    var btn = document.createElement('button');
    btn.innerText = element;
    btn.className = 'modButton'

    btn.addEventListener("click", (e) => {

      var button = e.target;
      button.style = "background-color: #202020;"
      last.style = "";
      last = button;
      var info = document.querySelector('#about-mode')
      info.children[0].innerHTML = button.innerHTML;
      info.children[1].innerHTML = mods_comment[index]
      clearTimeout(timer);
      if (index < 17 && index != 1) {
        colorInput.value = '#ffffff';
        colorInput.disabled = true;
        // colorInput.readOnly = true;
      }
      else {
        colorInput.disabled = false;
        console.log('enable')
        // colorInput.readOnly = false;
      }

      setColor(colorInput.value);
      viewSlider()
      drop_value();
      lastMode = view_mods[index + 1]
      timer = setInterval(() => {
        lastMode();
        view_leds();
      }, document.getElementById('delay').value, view);
    })
    mods_container.appendChild(btn);
  }

  sendButton = document.getElementById("send-mode")
  sendButton.addEventListener('click', () => {
    console.log("send")
    console.log(lastMode)
    console.log(view_mods.indexOf(lastMode))
    set_mode(view_mods.indexOf(lastMode))
    send_mode();
  })
  colorInput = document.getElementById("color");
  brightnesSlider = document.getElementById("brightnes");

  dropColor = document.getElementById('drop-color');
  var mods_div = document.querySelector(".mods");

  styleColor = document.querySelector(".colorSlider");
  styleBrightnes = document.querySelector(".brightnesSlider");

  btnDW = document.getElementById("DW");
  btnSM = document.getElementById("SM");
  var btnScrollUp = document.getElementById("up");
  var btnScrollDown = document.getElementById("down");

  document.getElementById('next').addEventListener('click', (e) => {
    clearTimeout(timer);
    var numMode = (view_mods.indexOf(lastMode) + 1) % view_mods.length;
    lastMode = view_mods[numMode];
    if (numMode < 17 && numMode != 1) {
      colorInput.value = '#ffffff';
      colorInput.disabled = true;
      console.log('disable')
      // colorInput.readOnly = true;
    }
    else {
      colorInput.disabled = false;
      console.log('enable')
      // colorInput.readOnly = false;
    }
    setColor(colorInput.value);
    viewSlider();
    drop_value();
    timer = setInterval(() => {
      view_mods[numMode]();
      view_leds();
    }, document.getElementById('delay').value, view)
    set_mode(numMode)
    try {
      last.style = "";
    } catch (error) {

    }

    if (numMode != 0) {
      last = document.querySelectorAll(".modButton")[numMode - 1];
      console.log(last)
      last.style = "background-color: #202020;"
    }
  })

  document.getElementById('back').addEventListener('click', (e) => {
    clearTimeout(timer);
    var numMode = (((view_mods.indexOf(lastMode) - 1) % view_mods.length) + view_mods.length) % view_mods.length;
    lastMode = view_mods[numMode];
    if (numMode < 17 && numMode != 1) {
      colorInput.value = '#ffffff';
      colorInput.disabled = true;
      console.log('disable')
      // colorInput.readOnly = true;
    }
    else {
      colorInput.disabled = false;
      console.log('enable')
      // colorInput.readOnly = false;
    }
    setColor(colorInput.value);
    viewSlider()
    drop_value();
    timer = setInterval(() => {
      view_mods[numMode]();
      view_leds();
    }, document.getElementById('delay').value, view)
    set_mode(numMode)
    try {
      last.style = "";
    } catch (error) {}
    if (numMode != 0) {
      last = document.querySelectorAll(".modButton")[numMode - 1];
      console.log(last)
      last.style = "background-color: #202020;"
    }
  })

  document.getElementById('to-start').addEventListener('click', (e) => {
    clearTimeout(timer);
    lastMode = actual_to_start;
    timer = setInterval(() => {
      actual_to_start();
      view_leds();
    }, document.getElementById('delay').value, view);
    set_mode(40);
    send_mode();
  })

  document.getElementById('to-end').addEventListener('click', (e) => {
    clearTimeout(timer);
    lastMode = actual_to_end;
    timer = setInterval(() => {
      actual_to_end();
      view_leds();
    }, document.getElementById('delay').value, view);
    set_mode(39);
    send_mode();
  })

  btnDW.addEventListener('click', () => {
    btnDW.innerHTML = displayWork[(dw = !dw) ? 1 : 0]
    if (!dw) {
      clearTimeout(timer);
      setColor('#ffffff00');
      one_color_all_code();
      view_leds();
      set_mode(41);
      send_mode();
      set_mode(view_mods.indexOf(lastMode));
      sendButton.disabled = true;
      sendButton.style = 'background-color: #46464630; color: #ffffff30'
    } else {
      send_mode()
      drop_value();
      setColor(colorInput.value)
      timer = setInterval(() => {
        lastMode();
        view_leds();
      }, document.getElementById('delay').value, view)
      sendButton.disabled = false;
      sendButton.style = ''
    }
  })

  btnSM.addEventListener('click', () => {
    btnSM.innerHTML = statusMode[(sm = !sm) ? 1 : 0]
    if (!sm) {
      set_mode(0);
      send_mode();
      set_mode(view_mods.indexOf(lastMode));
      clearTimeout(timer);
    } else {
      send_mode();
      timer = setInterval(() => {
        lastMode();
        console.log(timer);
        view_leds();
      }, document.getElementById('delay').value, view)
    }
  })

  document.getElementById('rangeValue').addEventListener('input', (e) => {
    set_delay(e.target.value)
  })

  document.getElementById('delay').addEventListener('input', (e) => {
    set_delay(e.target.value)
  })

  colorInput.value = '#ff0000'
  setColor(document.getElementById('color').value)
  viewSlider();

  colorInput.addEventListener("input", (e) => {
    viewSlider();
    setColor(colorInput.value);
    set_color()
  });

  brightnesSlider.addEventListener("input", (e) => {
    viewSlider()
    set_brightnes()
  });


  btnScrollDown.addEventListener('click', (e) => {
    mods_div.scrollTo({
      top: mods_div.scrollTop + 100,
      behavior: "smooth"
    });
  });

  btnScrollUp.addEventListener('click', (e) => {
    mods_div.scrollTo({
      top: mods_div.scrollTop - 100,
      behavior: "smooth"
    });
  });


  document.getElementById('delay').addEventListener('input', (e) => {
    var val = e.target.value
    console.log(e)
    clearTimeout(timer);
    setColor(colorInput.value);
    // drop_value();
    timer = setInterval(() => {
      lastMode();
      view_leds();
    }, val, view);
  })

  document.getElementById('about').addEventListener('click', () => {
    window.location.href = 'https://gitlab.com/sollo-prjoect/arduino-led-pc-program/-/blob/main/README.md?ref_type=heads';
  })

  selects = document.getElementById('select-lsit')

  selects.addEventListener('change', () => {
    update_port = false;
    set_port();
  });

  selects.addEventListener('click', () => {
    console.log(update_port)
    if (update_port) {
      console.log('aboba')
      get_ports()
    }
    update_port = true
  });
}