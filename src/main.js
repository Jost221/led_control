import {
    view_leds, rainbow, transfusion, rainbowSlider, rainbowTrain,
    verticalRainbow, redToRainbow, reversRainbowWave, lotsOfRainbowDots,
    randomizer, runRedBlue, runRedBlueTrace, russia, randomPop, policeLight,
    rgb_sectors, fier, pulseColor, white_temps, drop_value, whiteFlashesOnWhite,
    runRed, runRedTrain, flickerRed, setColor, pulseToRedColor, wormtToCenter,
    runRedLoop, bigSinus, jumpFromCenter, runRandomDote, longWorm, actual_to_start,
    actual_to_end, runWorm, smallFastSinusTrain, lotsOfRedDots, randomRed,
    sinusTrain, doteToCenter, flickering, bouncingBalls, one_color_all_code, my_map,
} from './mods.js'


import {
    get_ports, set_port, set_mode, set_color, set_brightnes, set_delay
} from './ApiFn.js'

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

let mods_div, view, colorInput, brightnesSlider, btnDW, btnSM, btnScrollUp;
let btnScrollDown, info, last, buttons, timer, lastMode, styleColor, leds_container;

window.addEventListener("DOMContentLoaded", () => {
    initVariables();
    viewSlider();
    createButton();
    SetingsEvent();
});

function initVariables() {
    mods_div = document.querySelector('.mods');
    view = document.querySelector('.view');
    colorInput = document.getElementById("color");
    brightnesSlider = document.getElementById("brightnes");
    btnDW = document.getElementById("DW");
    btnSM = document.getElementById("SM");
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
            EventOnClick(e.target, index, view_mods[index]);
        })
        mods_div.appendChild(btn);
    }
    buttons = mods_comment.children;
}

function EventOnClick(button, index, func) {
    try {
        last.style = "";
    } catch (error) {}
    button.style = "background-color: #202020;"
    last = button;
    info.children[0].innerHTML = button.innerHTML;
    info.children[1].innerHTML = mods_comment[index];
    clearTimeout(timer);
    if (index < 17 && index != 1) {
        colorInput.disabled = true;
        colorInput.style = "opacity: 30%;"
    } else {
        colorInput.disabled = false;
        colorInput.style = "opacity: 100%;"
    }
    setColor(colorInput.value);
    // viewSlider()
    drop_value();
    lastMode = func;
    timer = setInterval(() => {
        leds_container.style = `opacity: ${brightnesSlider.value/2.55}%;`;
        lastMode();
        view_leds();
    }, document.getElementById('delay').value, view);
}

function SetingsEvent(){
    colorInput.addEventListener("input", () => {
        viewSlider();
        setColor(colorInput.value);
        set_color(colorInput.value)
    });

    brightnesSlider.addEventListener("input", () => {
        viewSlider()
        set_brightnes()
    });
}