import {
    view_leds, rainbow, transfusion, rainbowSlider, rainbowTrain, off,
    verticalRainbow, redToRainbow, reversRainbowWave, lotsOfRainbowDots,
    randomizer, runRedBlue, runRedBlueTrace, russia, randomPop, policeLight,
    rgb_sectors, fier, pulseColor, white_temps, drop_value, whiteFlashesOnWhite,
    runRed, runRedTrain, flickerRed, setColor, pulseToRedColor, wormtToCenter,
    runRedLoop, bigSinus, jumpFromCenter, runRandomDote, longWorm, actual_to_start,
    actual_to_end, runWorm, smallFastSinusTrain, lotsOfRedDots, randomRed,
    sinusTrain, doteToCenter, flickering, bouncingBalls, one_color_all_code,
    pause,
} from './mods.js'


import {
    get_ports, set_port, set_mode, set_color, set_brightnes, set_delay, send_mode, get_data
} from './ApiFn.js'

const mods = [
    // rainbow
    'Радуга', 'Статический цвет', 'Переливка', 'Радуга волнами', ' Бегущие цвета',
    'Радуга волнами к центру', 'Красный-радуга', 'Обратная радуга', 'Радуга с промежутком',
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

const view_mods = [rainbow, one_color_all_code, transfusion, rainbowSlider, rainbowTrain,
    verticalRainbow, redToRainbow, reversRainbowWave, lotsOfRainbowDots,
    randomizer, runRedBlue, runRedBlueTrace, russia, randomPop, policeLight,
    rgb_sectors, fier, pulseColor, white_temps, whiteFlashesOnWhite, runRed,
    runRedTrain, flickerRed, pulseToRedColor, wormtToCenter, runRedLoop, bigSinus,
    jumpFromCenter, runRandomDote, longWorm, runWorm, smallFastSinusTrain,
    lotsOfRedDots, randomRed, sinusTrain, doteToCenter, flickering, bouncingBalls
]
function viewSlider() {
    // styleColor.innerHTML = `#color::-webkit-sli  der-thumb { background-color: hsl(${colorSlider.value}, 100%, 50%); }\n`;
    // styleColor.innerHTML += `#color::-moz-range-thumb { background-color: hsl(${colorSlider.value}, 100%, 50%); }\n`;
    styleColor.innerHTML = `#brightnes{ background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, ${colorInput.value} 100%); }\n`;
    styleColor.innerHTML += `#brightnes::-webkit-slider-thumb { background-color: ${colorInput.value + Number(brightnesSlider.value).toString(16)}; }\n`;
    styleColor.innerHTML += `#brightnes::-moz-range-thumb { background-color: ${colorInput.value + Number(brightnesSlider.value).toString(16)}; }\n`;
}

let mods_div, view, colorInput, brightnesSlider, btnScrollUp;
let btnScrollDown, info, last, buttons, timer, lastMode, styleColor, leds_container;
let delay_i, delay_s, selects;
const OF = ['ON', 'OFF'];
const SC = ['CONT', 'STOP'];

let flag = true;
let lastProtName;


window.addEventListener("DOMContentLoaded", () => {
    initVariables();
    viewSlider();
    createButton();
    SetingsEvent();
    rightPanelEvent();
    viewPortList();
    topControlButton();
    additionalButtons();
    leftRight();
    set_data();

    document.getElementById('send-mode').addEventListener("click", () => {
        set_mode(view_mods.indexOf(lastMode));
        send_mode()
    });
});

function initVariables() {
    mods_div = document.querySelector('.mods');
    view = document.querySelector('.view');
    colorInput = document.getElementById("color");
    brightnesSlider = document.getElementById("brightnes");
    btnScrollUp = document.getElementById("up");
    btnScrollDown = document.getElementById("down");
    info = document.querySelector('#about-mode');
    styleColor = document.querySelector(".colorSlider");
    leds_container = document.getElementById('leds-container');
}

function createButton() {
    for (let index = 0; index < mods.length; index++) {
        const element = mods[index];
        var btn = document.createElement('button');
        btn.innerText = element;
        btn.className = 'modButton'

        btn.addEventListener("click", (e) => {
            EventOnClick(e.target, view_mods[index], index);
        })
        mods_div.appendChild(btn);
    }
    buttons = [...document.querySelectorAll('.modButton')];
}

function EventOnClick(button, func, index) {
    try {
        last.style = "";
    } catch (error) { }
    button.style = "background-color: #202020;"
    last = button;
    clearTimeout(timer);
    if (index > -1) {
        info.children[0].innerHTML = button.innerHTML;
        info.children[1].innerHTML = mods_comment[index];
        if (index < 17 && index != 1) {
            colorInput.disabled = true;
            colorInput.style = "opacity: 30%;"
        } else {
            colorInput.disabled = false;
            colorInput.style = "opacity: 100%;"
        }
        lastMode = func;
        drop_value();
    } else {
        let additional = additional_modes(func);
        if(additional != undefined){
            set_mode(additional);
        }
        send_mode();
        set_mode(view_mods.indexOf(lastMode));
    }
    setColor(colorInput.value);
    set_color(colorInput.value);
    timer = setInterval(() => {
        leds_container.style = `opacity: ${brightnesSlider.value / 2.55}%;`;
        func();
        view_leds();
    }, delay_i.value, view);
}

function SetingsEvent() {
    colorInput.addEventListener("input", () => {
        viewSlider();
        setColor(colorInput.value);
        set_color(colorInput.value)
    });

    brightnesSlider.addEventListener("input", () => {
        viewSlider()
        set_brightnes(brightnesSlider.value)
    });

    function replaceDelay(e) {
        set_delay(e.target.value);
        clearTimeout(timer);
        timer = setInterval(() => {
            leds_container.style = `opacity: ${brightnesSlider.value / 2.55}%;`;
            lastMode();
            view_leds();
        }, e.target.value, view);
    }
    delay_i = document.getElementById('rangeValue')
    delay_i.addEventListener('input', (e) => {
        replaceDelay(e);
    });
    delay_s = document.getElementById('delay')
    delay_s.addEventListener('input', (e) => {
        replaceDelay(e);
    });
}

function rightPanelEvent() {
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
}

function viewPortList() {
    selects = document.getElementById('select-list');

    selects.addEventListener('change', () => {
        set_port(selects.value);
        flag = false;
        lastProtName = selects.value;
    });

    selects.addEventListener('click', () => {
        if (flag) {
            get_ports().then(
                result => {
                    selects.innerHTML = '';
                    selects.innerHTML += `<option>Выберете порт</option>`;
                    for (let i = 0; i < result.length; i++) {
                        selects.innerHTML += `<option>${result[i]}</option>`;
                    }
                    return
                },
                error => {
                    alert("can`t view ports");
                }
            );
        }
        flag = true;
    });
}

function topControlButton() {
    function switchMode(next = false) {
        var button, index, func;
        if (next == true) {
            index = (buttons.indexOf(last) + 1) % buttons.length;
        } else {
            index = (buttons.indexOf(last) - 1) % buttons.length;
        }
        button = buttons[index];
        func = view_mods[index];
        EventOnClick(button, func, index);
    }

    document.getElementById('next').addEventListener('click', (e) => {
        switchMode(true);
    })

    document.getElementById('back').addEventListener('click', (e) => {
        switchMode(false);
    })
}

function additionalButtons() {
    let sm = document.getElementById('SM');
    let dw = document.getElementById('DW');
    sm.addEventListener('click', () => {
        if (sm.innerHTML == SC[0]) {
            sm.innerHTML = SC[1];
            EventOnClick(last, lastMode);
            dw.innerHTML = OF[1];
        } else {
            sm.innerHTML = SC[0];
            EventOnClick(last, pause, -1);
        }
    })

    dw.addEventListener('click', () => {
        if (dw.innerHTML == OF[0]) {
            dw.innerHTML = OF[1];
            EventOnClick(last, lastMode, -1);
            sm.innerHTML = SC[1];
        } else {
            dw.innerHTML = OF[0];
            EventOnClick(last, off, -1);
        }
    })
}

function leftRight() {
    document.getElementById('to-start').addEventListener('click', () => {
        EventOnClick(last, actual_to_start, -1);
    })

    document.getElementById('to-end').addEventListener('click', () => {
        EventOnClick(last, actual_to_end, -1);
    })
}

function additional_modes(func) {
    switch (func) {
        case actual_to_end:
            return 38;
        case actual_to_start:
            return 39;
        case pause:
            return 40;
        case off:
            return 41;
    }
}

function set_data() {
    try {
        let data = get_data();
        data.then(
            result => {
                result = JSON.parse(result);
                console.log(result)
                selects.innerHTML = `<option>${result.port_name}</option>`
                delay_i.value = result.delay;
                delay_s.value = result.delay;
            },
            error => {
                alert(error);
            }
        )
    } catch(error) {
        alert(error);
    }
}