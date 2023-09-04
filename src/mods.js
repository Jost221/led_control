let dealy;

let counter = 0;
let color = 0;
let direction = 0;
let mode = 0;
let index = 0;
let step = 0;
let len = 0;

const NUM_LEDS = 24;

let leds = new Array(NUM_LEDS).fill(rgba(0, 0, 0, 0));
let leds_div = [];

let heat = new Array(NUM_LEDS).fill(0);


// for bouncing balls
let Gravity = -9.81;
let StartHeight = 1;
const BallCount = 3;

let Height = new Array(BallCount).fill(0);
let ImpactVelocityStart = Math.sqrt( -2 * Gravity * StartHeight );
let ImpactVelocity = new Array(BallCount).fill(0);
let TimeSinceLastBounce = new Array(BallCount).fill(0);
let Position = new Array(BallCount).fill(0);
let ClockTimeSinceLastBounce = new Array(BallCount).fill(0);
let Dampening = new Array(BallCount).fill(0);

window.addEventListener("DOMContentLoaded", () => {
    var leds_container = document.getElementById("leds-container");

    for (let index = 0; index < NUM_LEDS; index++) {
        var led = document.createElement('div');
        led.className = 'led';
        leds_div.push(led);
        leds_container.appendChild(led);
    }
})

// leds.forEach(element => {
//     element = {
//         type: 1,
//         f: 0,
//         s: 0,
//         t: 0,
//         fo: 0
//     }
// });

export function drop_value() {
    counter = 0;
    direction = true;
    mode = 0;
    index = 0;
    step = 0;
    len = 0;
}

export async function off() {
    one_color_all(0,0,0,0);
}

export async function rainbow() {
    for (let i = 0; i < NUM_LEDS; i++)
        leds[i] = CHSV(counter + i * 2, 100, 50);
    counter++;
}

export async function transfusion() {
    for (let i = 0; i < NUM_LEDS; i++)
        leds[i] = CHSV(counter, 100, 50);
    counter++;
}

export async function rainbowSlider() {
    leds[index] = CHSV(counter + index * 4, 100, 50);
    PlusIndex();
    console.log(index)
    if (index == leds.length - 1) counter += 40;
}

export async function rainbowTrain() {
    for (let i = NUM_LEDS; i > 0; i--)
        leds[i] = leds[i - 1]
    leds[0] = CHSV(random(360), 100, 50);
}

export async function verticalRainbow() {
    leds[index] = CHSV(counter * 2 + index, 100, 50);
    leds[GRV(index++)] = CHSV(counter++ * 2 + index, 100, 50);
    index %= NUM_LEDS / 2 + 1;
}

export async function redToRainbow() {
    if (index == 0) {
        color = 0;
        step = random(5, 15);
        if (random(1)) step = -step;
    }
    leds[index] = CHSV(color, 100, 50);
    leds[GRV(index++)] = CHSV(color, 100, 50);
    color += step;
    index %= NUM_LEDS / 2 + 1;
}

export async function reversRainbowWave() {
    for (let i = 0; i < NUM_LEDS; i++)
        leds[i] = CHSV(counter + GRV(i) * 2, 100, 50);
    counter++;
}

export async function lotsOfRainbowDots() {
    step = (step + 1) % 3;
    one_color_all(0, 0, 0);
    for (let i = 0; i < NUM_LEDS; i += 3)
        leds[i + step] = CHSV(counter + i * 2, 100, 50);
    counter++;
}

export async function randomizer() {
    leds[random(NUM_LEDS)] = CHSV(random(255), 100, 50);
}

export async function runRedBlue() {
    leds[index] = rgba(0, 0, 0, 0);
    leds[(index + 1) % NUM_LEDS] = rgb(255, 0, 0);
    leds[GPH(index)] = rgba(0, 0, 0, 0);
    leds[(GPH(index) + 1) % NUM_LEDS] = rgb(0, 0, 255);
    PlusIndex();
}

export async function runRedBlueTrace() {
    leds[index] = rgb(255, 0, 0);
    leds[GPH(index)] = rgb(0, 0, 255);
    PlusIndex();
}

export async function russia() {
    for (let i = NUM_LEDS; i > 0; i--)
        leds[i] = leds[i - 1];
    PlusIndex();
    if (index % 3 == 2) {
        leds[0] = rgb(0, 0, 255);
    } else if (index % 3) {
        leds[0] = rgb(255, 255, 255);
    } else {
        leds[0] = rgb(255, 0, 0);
    }
}

export async function randomPop() {
    one_color_all(0, 0, 0);
    leds[random(NUM_LEDS)] = CHSV(random(359), 100, 50);
}

export async function one_color_all(r, g, b, a = 0) {
    for (let i = 0; i < NUM_LEDS; i++)
        leds[i] = rgba(r, g, b, a);
}

export async function policeLight() {
    one_color_all(0, 0, 0);
    step = Math.floor(Math.random()*3);
    if (step == 0) {
        for (let i = 0; i < NUM_LEDS / 2; i++) leds[i] = rgb(255, 0, 0);
    } else if (step == 1) {
        for (let i = NUM_LEDS / 2; i < NUM_LEDS; i++) leds[i] = rgb(0, 0, 255);
    }
    console.log(leds)
}

export async function rgb_sectors() {
    leds[index] = rgb(255, 0, 0);
    leds[GFT(index)] = rgb(0, 255, 0);
    leds[GST(index)] = rgb(0, 0, 255);
    PlusIndex();
    console.log(leds)
}

export async function fier() {
    var cooldown;
    var lenFire = 55;
    var lenSparks = 120;
    // Step 1.  Cool down every cell a little
    for (let i = 0; i < NUM_LEDS; i++) {
        cooldown = random(((lenFire * 10) / NUM_LEDS) + 2);
        (cooldown > heat[i]) ? heat[i] = 0 : heat[i] = heat[i] - cooldown;
    }
    // Step 2.  Heat from each cell drifts 'up' and diffuses a little
    for (let k = NUM_LEDS - 1; k >= 2; k--)
        heat[k] = (heat[k - 1] + heat[k - 2] + heat[k - 2]) / 3;
    // Step 3.  Randomly ignite new 'sparks' near the bottom
    if (random(255) < lenSparks) {
        let y = random(7);
        heat[y] = heat[y] + random(160, 255);
    }
    // Step 4.  Convert heat to LED colors
    for (let j = 0; j < NUM_LEDS; j++) {
        let t192 = Math.round((heat[j] / 255) * 191);
        // calculate ramp up from
        let heatramp = (t192 & 0x3F) << 2;

        // figure out which third of the spectrum we're in:
        if (t192 > 0x80) leds[j] = rgb(255, 255, heatramp);
        else if (t192 > 0x40) leds[j] = rgb(255, heatramp, 0);
        else leds[j] = rgb(heatramp, 0, 0);
    }
}

export async function pulseColor() {
    if (counter >= 49 || counter <= 0) {
        mode = !mode;
        if (counter <= 0)
            color = random(255);
    }
    mode ? counter++ : counter--;
    for (let i = 0; i < NUM_LEDS; i++)
        leds[i] = CHSV(color, 100, 100 - (counter % 50));
}

export async function white_temps() {
    let one_nine = NUM_LEDS / 9;
    for (let i = 0; i < NUM_LEDS; i++) {
        if (i < one_nine) leds[i] = rgb(255, 147, 82);
        else if (i < one_nine * 2) leds[i] = rgb(255, 197, 143);
        else if (i < one_nine * 3) leds[i] = rgb(255, 214, 170);
        else if (i < one_nine * 4) leds[i] = rgb(255, 241, 224);
        else if (i < one_nine * 5) leds[i] = rgb(255, 250, 244);
        else if (i < one_nine * 6) leds[i] = rgb(255, 255, 251);
        else if (i < one_nine * 7) leds[i] = rgb(255, 255, 255);
        else if (i < one_nine * 8) leds[i] = rgb(201, 226, 255);
        else leds[i] = rgb(128, 156, 255);
    }
}

export async function whiteFlashesOnWhite() {
    for (let i = 0; i < NUM_LEDS; i++)
        leds[i] = code(color + '90');
    leds[random(NUM_LEDS)] = code(color + random(100, 255).toString(16));
}

export async function runRed() {
    if (direction) {
        leds[index++] = rgba(0, 0, 0, 0);
        leds[index] = code(color);
    } else {
        leds[index--] = rgba(0, 0, 0, 0);
        leds[index] = code(color);
    }
    if (index >= NUM_LEDS - 1 || index < 0)
        direction = !direction;
}

export async function runRedTrain() {
    if (direction) {
        if (index != 0)
            leds[index - 1] = rgba(0, 0, 0, 0);
        index++;
    } else {
        leds[index + 6] = rgba(0, 0, 0, 0);
        index--;
    }
    for (let i = 5; i >= 0; i--)
        leds[index + i] = code(color + Math.floor(Math.sin(i * 0.314 * 2) * 245 + 10).toString(16));

    if (index >= NUM_LEDS - 5 || index <= 0)
        direction = !direction;
}

export async function flickerRed() {
    if (counter++ < 5)
        return;
    counter = 0;
    let col = random(5);
    for (let i = 0; i < NUM_LEDS; i++)
        leds[i] = code(color + (col * 51).toString(16));
}

export async function pulseToRedColor() {
    for (let i = 0; i < NUM_LEDS; i++)
        leds[i] = code(color + counter.toString(16));
    if (counter >= 255 || counter <= 0)
        mode = !mode;
    mode ? counter++ : counter--;
}

export async function wormtToCenter() {
    var temporary = counter;
    var temporary1 = counter;
    console.log(((my_map(temporary1+=35, 0, 255, 0, 1)*255)/1).toString(16));
    var col = hexToRgb(color);
    for (let i = NUM_LEDS / 2; i >= 0; i--)
        leds[i] = code(color+((temporary+=35)%255).toString(16));
    for (let i = NUM_LEDS / 2; i < NUM_LEDS; i++)
        leds[i] = code(color+((temporary+=35)%255).toString(16));
    counter += 10;
}

export async function runRedLoop() {
    leds[index - 1] = rgba(0, 0, 0, 0);
    leds[NUM_LEDS - 1] = rgba(0, 0, 0, 0);  //kostil
    leds[index] = code(color);
    PlusIndex();
}

export async function bigSinus() {
    for (let i = 0; i < NUM_LEDS; i++)
        leds[i] = code(color + VALtoHEX(Math.floor(Math.sin(my_map(i, 0, NUM_LEDS, 0.0, 3.14)) * 240)));
}

export async function jumpFromCenter() {
    var rand = random(NUM_LEDS / 2);
    leds[NUM_LEDS / 2] = code(color)
    for (let i = 0; i < rand; i++) {
        leds[i] = rgba(0, 0, 0, 0);
        leds[NUM_LEDS - i] = rgba(0, 0, 0, 0);
        view_leds();
    }
    for (let i = rand; i > 0; i--) {
        leds[NUM_LEDS / 2 - i] = code(color);
        leds[NUM_LEDS / 2 + i] = code(color);
        view_leds()
    }
}

export async function runRandomDote() {
    for (let i = NUM_LEDS; i > 0; i--)
        leds[i] = leds[i - 1];
    !random(5) ? leds[0] = code(color) : leds[0] = rgba(0, 0, 0, 0);
}

export async function longWorm() {
    var flag = true;
    for (let i = 0; i < NUM_LEDS; i++)
        if (leds[i].type == 0)
            flag = false;
            
    if (flag) {
        len = random_d(NUM_LEDS/2, NUM_LEDS*1.5);
        index = 0;
    }
    if (index < 60)
        leds[index] = code(color);
    if (index - len >= 0)
        leds[index - len] = rgba(0, 0, 0, 0);
    index++;
}

export async function runWorm() {
    for (let i = 0; i < counter; i++)
        leds[i] = rgba(0, 0, 0, 0)
    for (let i = counter; i < counter+NUM_LEDS/4; i++)
        leds[i] = code(color+VALtoHEX(Math.floor(Math.sin(my_map(i, counter, counter+NUM_LEDS/4, 0.0, 3.14))*255)));
    for (let i = counter+NUM_LEDS/4; i < NUM_LEDS; i++)
        leds[i] = rgba(0, 0, 0, 0)
    if (counter <= 0 || counter+NUM_LEDS/4 >= NUM_LEDS)
        mode = !mode;
    mode ? counter++ : counter--;
}

export async function smallFastSinusTrain() {
    for (let i = 0; i < NUM_LEDS; i++){
        var modif = Math.floor(Math.sin(my_map((counter += 26)%255, 0, 255, 0.0, 3.14)) * 255);
        leds[i] = code(color+VALtoHEX(modif));
    }
}

export async function lotsOfRedDots() {
    step = (step + 1) % 3;
    one_color_all(0, 0, 0);
    for (let i = 0; i < NUM_LEDS; i += 3)
        leds[i + step] = code(color);
    counter++;
}

export async function randomRed() {
    leds[random(NUM_LEDS)] = code(color+VALtoHEX(random(255)));
}

export async function sinusTrain() {
    leds[index] = code(color + VALtoHEX(Math.floor(Math.sin(my_map((counter += 30)%255, 0, 255, 0.0, 3.14)) * 255)));
    PlusIndex();
}

export async function doteToCenter() {
    direction = !direction;
    if (direction) one_color_all(0, 0, 0);
    else {
      leds[index] = code(color);
      leds[GRV(index++)] = code(color);
      index %= NUM_LEDS / 2;
    }
}

export async function flickering() {
    if(random(2)) {
        for (let i = 0; i < NUM_LEDS; i++) {
            leds[i] = code(color)
        }
    } else one_color_all(0, 0, 0);
}

export async function bouncingBalls() {
    one_color_all(0, 0, 0, 0);
    for (let i = 0; i < BallCount; i++) {
      TimeSinceLastBounce[i] = (new Date()).getTime() - ClockTimeSinceLastBounce[i];
      Height[i] = 0.5 * Gravity * Math.pow(TimeSinceLastBounce[i] / 1000, 2.0) + ImpactVelocity[i] * TimeSinceLastBounce[i] / 1000;
      if (Height[i] < 0) {
        Height[i] = 0;
        ImpactVelocity[i] = Dampening[i] * ImpactVelocity[i];
        ClockTimeSinceLastBounce[i] = (new Date()).getTime();
        if (ImpactVelocity[i] < 0.01) 
          ImpactVelocity[i] = ImpactVelocityStart;
      }
      Position[i] = Math.round(Height[i] * (NUM_LEDS - 1) / StartHeight);
    }
    for (let i = 0; i < BallCount; i++)
      leds[Position[i]] = code(color);
    console.log(Position)
  }

export async function one_color_all_code(){
    for(let i = 0; i < NUM_LEDS; i++)
        leds[i] = code(color);
}

export async function actual_to_end() {
    var led = leds[NUM_LEDS - 1];
    for (let i = NUM_LEDS - 1; i >= 0; i--)
      leds[i] = leds[i - 1];
    leds[0] = led;
}
  
export async function actual_to_start() {
    var led = leds[0];
    for (let i = 0; i < NUM_LEDS - 1; i++)
      leds[i] = leds[i + 1];
    leds[NUM_LEDS - 1] = led;
}

export async function view_leds() {
    // console.log(leds)
    for (let i = 0; i < NUM_LEDS; i++) {
        // console.log(leds[i])
        switch (leds[i].type) {
            case 0:
                leds_div[i].style = `background: ${leds[i].f};`;
                break;
            case 1:
                leds_div[i].style = `background: rgb(${leds[i].f}, ${leds[i].s}, ${leds[i].t});`;
                break;
            case 2:
                leds_div[i].style = `background: hsla(${leds[i].f}, ${leds[i].s}%, ${leds[i].t}%, ${leds[i].fo});`;
                break;
            case 3:
                leds_div[i].style = `background: rgba(${leds[i].f}, ${leds[i].s}, ${leds[i].t}, ${leds[i].fo});`;
                break;
        }
    }
    console.log('view')
}

function PlusIndex() {
    index = (index + 1) % NUM_LEDS;
}

function GRV(index) { //get reverse value
    return (NUM_LEDS - index);
}

function code(c) {
    return {
        type: 0,
        f: c
    }
}

function CHSV(h, s, v, a = 1) {
    return {
        type: 2,
        f: h,
        s: s,
        t: v,
        fo: a
    }
}

function rgba(r, g, b, a) {
    return {
        type: 3,
        f: r,
        s: g,
        t: b,
        fo: a
    }
}

function rgb(r, g, b) {
    return {
        type: 1,
        f: r,
        s: g,
        t: b
    }
}

function GPH(i) { // getPlusHalf
    return (i + Math.floor(NUM_LEDS / 2)) % NUM_LEDS;
}

function GFT(i) { //get first third
    return (i + Math.floor(NUM_LEDS / 3)) % NUM_LEDS;
}

function GST(i) { //get second third
    return (i + Math.floor(NUM_LEDS * 2 / 3)) % NUM_LEDS;
}

function random(x) {
    return Math.floor(Math.random() * x);
}

function random_d(x, y) {
    return Math.floor(Math.random() * (y - x) + x);
}

export function setColor(a) {
    color = a;
}

const RGBToHSL = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const l = Math.max(r, g, b);
    const s = l - Math.min(r, g, b);
    const h = s
        ? l === r
            ? (g - b) / s
            : l === g
                ? 2 + (b - r) / s
                : 4 + (r - g) / s
        : 0;
    return [
        60 * h < 0 ? 60 * h + 360 : 60 * h,
        100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
        (100 * (2 * l - s)) / 2,
    ];
};

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

export function my_map(value, min, max, min_res, max_res) {
    return (((max_res - min_res) / (max - min)) * (value - min)) + min_res;
}

function VALtoHEX(val) {
    var val = val.toString(16);
    return val.length > 1 ? val : '0' + val;
}