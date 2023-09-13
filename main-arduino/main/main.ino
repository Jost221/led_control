#define NUM_LEDS 60
#include "FastLED.h"
CRGB leds[NUM_LEDS];

#define PIN 2                         // Пин подключения ленты
int delayTime = 50;                   // Время задержки
int ledMode = 1;                      // Режим работы
byte color[] = { 255, 255,255 };       // Цвет в RGB
const int BallCount = 3;              // Количество мячиков


int lastMode = 0;
byte counter = 0;
bool direction = 0;
byte mode = 0;
byte index = 0;
byte step = 0;
int len = 0;
byte crafty = 0;

// for bouncing balls
float Gravity = -9.81;
int StartHeight = 1;

float Height[BallCount];
float ImpactVelocityStart = sqrt(-2 * Gravity * StartHeight);
float ImpactVelocity[BallCount];
float TimeSinceLastBounce[BallCount];
int Position[BallCount];
long ClockTimeSinceLastBounce[BallCount];
float Dampening[BallCount];

void setup() {
  FastLED.addLeds<WS2811, PIN, GRB>(leds, NUM_LEDS).setCorrection(TypicalLEDStrip);
  FastLED.setBrightness(255);
  one_color_all(0, 0, 0);
  FastLED.show();
  Serial.begin(9600);

  for (int i = 0; i < BallCount; i++) {
    ClockTimeSinceLastBounce[i] = millis();
    Height[i] = StartHeight;
    Position[i] = 0;
    ImpactVelocity[i] = ImpactVelocityStart;
    TimeSinceLastBounce[i] = 0;
    Dampening[i] = 0.90 - float(i) / pow(BallCount, 2);
  }
}

void serialEvent() {
  delay(50);
  switch (Serial.read()) {
    case 0:
      ledMode = Serial.read();
      lastMode = 0;
      counter = 0;
      direction = 0;
      mode = 0;
      index = 0;
      step = 0;
      len = 0;
      crafty = 0;
      break;
    case 1:
      for (int i = 0; i < 3; i++) {
        color[i] = Serial.read();
      }
      while (Serial.available()) {
        Serial.read();
      }
      break;
    case 2:
      FastLED.setBrightness(Serial.read());
      break;
    case 3:
      delayTime = Serial.parseInt();
  }
}

void loop() {
  switch (ledMode) {
    
    case 0: raibowWave(); break;
    case 1: one_color_all(color[0], color[1], color[2]); break;
    case 2: transfusion(); break;
    case 3: rainbowSlider(); break;
    case 4: rainbowTrain(); break;
    case 5: verticalRainbow(); break;
    case 6: redToRainbow(); break;  // не работает изза кривого рандома
    case 7: reversRainbowWave(); break;
    case 8: lotsOfRainbowDots(); break;
    case 9: randomizer(); break;
    case 10: runRedBlue(); break;
    case 11: runRedBlueTrace(); break;
    case 12: russia(); break;
    case 13: randomPop(); break;
    case 14: policeLight(); break;
    case 15: rgb_sectors(); break;
    case 16: fier(); break;
    case 17: pulseColor(); break;
    case 18: white_temps(); break;
    case 19: whiteFlashesOnWhite(); break;
    case 20: runRed(); break;
    case 21: runRedTrain(); break;
    case 22: flickerRed(); break;
    case 23: pulseToRedColor(); break;
    case 24: wormtToCenter(); break;
    case 25: runRedLoop(); break;
    case 26: bigSinus(); break;
    case 27: jumpFromCenter(); break;
    case 28: runRandomDote(); break;
    case 29: longWorm(); break;
    case 30: runWorm(); break;
    case 31: smallFastSinusTrain(); break;
    case 32: lotsOfRedDots(); break;
    case 33: randomRed(); break;
    case 34: sinusTrain(); break;
    case 35: doteToCenter(); break;
    case 36: flickering(); break;
    case 37: bouncingBalls(); break;  // снов лень, снова просто редачу

    case 38: actual_to_end(); break;
    case 39: actual_to_start(); break;
    case 40: break;
    case 41: one_color_all(0, 0, 0); break;
  }
  FastLED.show();
  // Serial.println();
  delay(delayTime);  // скорость движения радуги
}