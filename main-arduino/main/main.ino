#include "FastLED.h"

#define NUM_LEDS 20
#define PIN 13
CRGB leds[NUM_LEDS];

// settings variable
int delayTime = 50;
int ledMode = 1;


int lastMode = 0;
byte counter = 0;
byte color[] = { 255, 255, 255 };
bool direction = 0;
byte mode = 0;
byte index = 0;
byte step = 0;
int len = 0;
byte crafty = 0;

// for bouncing balls
float Gravity = -9.81;
int StartHeight = 1;
const int BallCount = 3;

float Height[BallCount];
float ImpactVelocityStart = sqrt(-2 * Gravity * StartHeight);
float ImpactVelocity[BallCount];
float TimeSinceLastBounce[BallCount];
int Position[BallCount];
long ClockTimeSinceLastBounce[BallCount];
float Dampening[BallCount];

void setup() {
  FastLED.addLeds<WS2812, PIN, GRB>(leds, NUM_LEDS).setCorrection(TypicalLEDStrip);
  FastLED.setBrightness(255);
  one_color_all(0, 0, 0);
  FastLED.show();
  Serial.begin(115200);

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
  lastMode = 0;
  counter = 0;
  direction = 0;
  mode = 0;
  index = 0;
  step = 0;
  len = 0;
  crafty = 0;

  switch (Serial.read()) {
    case 0:
      ledMode = Serial.read();
      //      if (Serial.read() == 1) {
      //        for (int i = 0; i < 3; i++) {
      //          color[i] = Serial.read();
      //        }
      //      }
      //      if(Serial.read() == 2){
      //        FastLED.setBrightness(Serial.read());
      //      }
      break;
    case 1:

      for (int i = 0; i < 3; i++) {
        color[i] = Serial.read();
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
    case 0: break;
    case 1: raibowWave(); break;
    case 2: one_color_all(color[0], color[1], color[2]); break;
    case 3: transfusion(); break;
    case 4: rainbowSlider(); break;
    case 5: rainbowTrain(); break;
    case 6: verticalRainbow(); break;
    case 7: redToRainbow(); break;  // не работает изза кривого рандома
    case 8: reversRainbowWave(); break;
    case 9: lotsOfRainbowDots(); break;
    case 10: randomizer(); break;
    case 11: runRedBlue(); break;
    case 12: runRedBlueTrace(); break;
    case 13: russia(); break;
    case 14: randomPop(); break;
    case 15: policeLight(); break;
    case 16: rgb_sectors(); break;
    case 17: fier(); break;
    case 18: pulseColor(); break;
    case 19: white_temps(); break;
    case 20: whiteFlashesOnWhite(); break;
    case 21: runRed(); break;
    case 22: runRedTrain(); break;
    case 23: flickerRed(); break;
    case 24: pulseToRedColor(); break;
    case 25: wormtToCenter(); break;
    case 26: runRedLoop(); break;
    case 27: bigSinus(); break;
    case 28: jumpFromCenter(); break;
    case 29: runRandomDote(); break;
    case 30: longWorm(); break;
    case 31: runWorm(); break;
    case 32: smallFastSinusTrain(); break;
    case 33: lotsOfRedDots(); break;
    case 34: randomRed(); break;
    case 35: sinusTrain(); break;
    case 36: doteToCenter(); break;
    case 37: flickering(); break;
    case 38: bouncingBalls(); break;  // снов лень, снова просто редачу
    case 39: actual_to_end(); break;
    case 40: actual_to_start(); break;
    case 41: one_color_all(0, 0, 0); break;
  }
  FastLED.show();
  // Serial.println();
  delay(delayTime);  // скорость движения радуги
}
