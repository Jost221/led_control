void one_color_all(int r, int g, int b) {
  for (int i = 0; i < NUM_LEDS; i++)
    leds[i].setRGB(r, g, b);
}

void raibowWave() {
  for (int i = 0; i < NUM_LEDS; i++)
    leds[i] = CHSV(counter + i * 2, 255, 255);
  counter++;
}

void transfusion() {
  for (int i = 0; i < NUM_LEDS; i++)
    leds[i] = CHSV(counter, 255, 255);
  counter++;
}

void rainbowSlider() {
  leds[index] = CHSV(counter + index * 4, 255, 255);
  PluslIndex();
  if (index == NUM_LEDS - 1)
    counter += 40;
}

void randomizer() {
  leds[random(0, NUM_LEDS)] = CHSV(random(0, 256), 255, 255);
}

void runRed() {
  if (direction) {
    leds[index++] = CHSV(0, 0, 0);
    leds[index].setRGB(color[0], color[1], color[2]);
  } else {
    leds[index--] = CHSV(0, 0, 0);
    leds[index].setRGB(color[0], color[1], color[2]);
  }

  if (index >= 59 || index < 0)
    direction = !direction;
}

void runRedTrain() {
  if (direction) {
    if (index != 0)
      leds[index - 1].setRGB(0, 0, 0);
    index++;
  } else {
    leds[index + 11].setRGB(0, 0, 0);
    index--;
  }
  for (int i = 10; i >= 0; i--){
    float modif = sin(i * 0.314);
    leds[index + i].setRGB((int)((1 - modif) * 0 + modif * color[0]), (int)((1 - modif) * 0 + modif * color[1]), (int)((1 - modif) * 0 + modif * color[2]));
  }

  if (index >= NUM_LEDS - 10)
    direction = !direction;
}

void runRedBlue() {
  leds[index] = CHSV(0, 0, 0);
  leds[index + 1].setRGB(255, 0, 0);
  leds[GPH(index)] = CHSV(0, 0, 0);
  leds[GPH(index) + 1].setRGB(0, 0, 255);
  PluslIndex();
}

void runRedBlueTrace() {
  leds[index].setRGB(255, 0, 0);
  leds[GPH(index)].setRGB(0, 0, 255);
  PluslIndex();
}

void flickerRed() {
  if (counter++ < 5)
    return;
  counter = 0;
  float modif = my_map(random(0, 5), 0, 4, 0, 1);
  for (int i = 0; i < NUM_LEDS; i++)
    leds[i].setRGB((int)((1 - modif) * 0 + modif * color[0]), (int)((1 - modif) * 0 + modif * color[1]), (int)((1 - modif) * 0 + modif * color[2]));
}

void pulseToRedColor() {
  float modif = my_map(counter, 0, 255, 0, 1);
  for (int i = 0; i < NUM_LEDS; i++)
    leds[i].setRGB((int)((1 - modif) * 0 + modif * color[0]), (int)((1 - modif) * 0 + modif * color[1]), (int)((1 - modif) * 0 + modif * color[2]));
  if (counter >= 255 || counter <= 0)
        mode = !mode;
    mode ? counter++ : counter--;
}

void pulseColor() {
  if (counter >= 255 || counter <= 0) {
    mode = !mode;
    if (counter <= 0)
      step = random(0, 255);
  }
  mode ? counter++ : counter--;
  for (int i = 0; i < NUM_LEDS; i++)
    leds[i] = CHSV(step, counter, 255);
}

void wormtToCenter() {
  byte temporary = counter;
  byte temporary1 = counter;
  for (int i = NUM_LEDS / 2; i >= 0; i--){
    float modif = my_map(temporary1+=35, 0, 255, 0, 1);
    leds[i].setRGB((int)((1 - modif) * 0 + modif * color[0]), (int)((1 - modif) * 0 + modif * color[1]), (int)((1 - modif) * 0 + modif * color[2]));
  }
    
  for (int i = NUM_LEDS / 2; i < NUM_LEDS; i++){
    float modif = my_map(temporary+=35, 0, 255, 0, 1);
    leds[i].setRGB((int)((1 - modif) * 0 + modif * color[0]), (int)((1 - modif) * 0 + modif * color[1]), (int)((1 - modif) * 0 + modif * color[2]));
  }
  counter += 10;
}

void randomRed() {
  float modif = (float)random(0, 100)/100.0;
  leds[random(0, NUM_LEDS)].setRGB((int)((1 - modif) * 0 + modif * color[0]), (int)((1 - modif) * 0 + modif * color[1]), (int)((1 - modif) * 0 + modif * color[2]));
}

void rainbowTrain() {
  for (int i = NUM_LEDS; i > 0; i--)
    leds[i] = leds[i - 1];
  leds[0] = CHSV(random(0, 255), 255, 255);
}

void russia() {
  for (int i = NUM_LEDS; i > 0; i--)
    leds[i] = leds[i - 1];
  PluslIndex();
  if (index % 3 == 2) {
    leds[0].setRGB(0, 0, 255);
  } else if (index % 3) {
    leds[0].setRGB(255, 255, 255);
  } else {
    leds[0].setRGB(255, 0, 0);
  }
}

void runRedLoop() {
  leds[index - 1] = CHSV(0, 0, 0);
  leds[NUM_LEDS - 1] = CHSV(0, 0, 0);  //kostil
  leds[index].setRGB(color[0], color[1], color[2]);
  PluslIndex();
}

void white_temps() {  // какая то хуйня показывающая хуйня показывающая температуру в зависимости от ватт
  int one_nine = int(NUM_LEDS / 9);
  for (int i = 0; i < NUM_LEDS; i++) {
    if (i < one_nine) leds[i].setRGB(255, 147, 41);
    else if (i < one_nine * 2) leds[i].setRGB(255, 197, 143);
    else if (i < one_nine * 3) leds[i].setRGB(255, 214, 170);
    else if (i < one_nine * 4) leds[i].setRGB(255, 241, 224);
    else if (i < one_nine * 5) leds[i].setRGB(255, 250, 244);
    else if (i < one_nine * 6) leds[i].setRGB(255, 255, 251);
    else if (i < one_nine * 7) leds[i].setRGB(255, 255, 255);
    else if (i < one_nine * 8) leds[i].setRGB(201, 226, 255);
    else leds[i].setRGB(64, 156, 255);
  }
}

void sinusTrain() {
  float modif = int(sin(my_map(counter += 15, 0, 255, 0.0, 3.14)) * 255);
  leds[index].setRGB((int)((1 - modif) * 0 + modif * color[0]), (int)((1 - modif) * 0 + modif * color[1]), (int)((1 - modif) * 0 + modif * color[2]));
  PluslIndex();
}

void doteToCenter() {
  direction = !direction;
  if (direction) one_color_all(0, 0, 0);
  else {
    leds[index].setRGB(color[0], color[1], color[2]);
    leds[GRV(index++)].setRGB(color[0], color[1], color[2]);
    index %= NUM_LEDS / 2;
  }
}

void bigSinus() {
  for (int i = 0; i < NUM_LEDS; i++){
    float modif = sin(my_map(i, 0, NUM_LEDS, 0.0, 3.14));
    leds[i].setRGB((int)((1 - modif) * 0 + modif * color[0]), (int)((1 - modif) * 0 + modif * color[1]), (int)((1 - modif) * 0 + modif * color[2]));
  }
}

void redToRainbow() {
  if (index == 0) {
    crafty = 0;
    step = random(10)+5;
    if (random(0, 1)) step = -step;
  }
  leds[index] = CHSV(crafty, 255, 255);
  leds[GRV(index++)] = CHSV(crafty, 255, 255);
  crafty += step;
  index %= NUM_LEDS / 2 + 1;
}

void verticalRainbow() {
  leds[index] = CHSV(counter * 2 + index, 255, 255);
  leds[GRV(index++)] = CHSV(counter++ * 2 + index, 255, 255);
  index %= NUM_LEDS / 2 + 1;
}

void randomPop() {
  index = random(0, NUM_LEDS);
  crafty  = random(0, 255);
  one_color_all(0, 0, 0);
  leds[index] = CHSV(crafty, 255, 255);
}

void policeLight() {
  one_color_all(0, 0, 0);
  step = random(0, 3);
  if (step == 0) {
    for (int i = 0; i < NUM_LEDS / 2; i++) leds[i].r = 255;
  } else if (step == 1) {
    for (int i = NUM_LEDS / 2; i < NUM_LEDS; i++) leds[i].b = 255;
  }
  delay(200);
}

void rgb_sectors() {
  leds[index].setRGB(255, 0, 0);
  leds[GFT(index)].setRGB(0, 255, 0);
  leds[GST(index)].setRGB(0, 0, 255);
  PluslIndex();
}

void jumpFromCenter() {
  byte rand = random(0, NUM_LEDS / 2);
  for (int i = 0; i < rand; i++) {
    leds[NUM_LEDS / 2 - i].setRGB(color[0], color[1], color[2]);
    leds[NUM_LEDS / 2 + i].setRGB(color[0], color[1], color[2]);
    FastLED.show();
    delay(6);
  }
  for (int i = rand; i > 0; i--) {
    leds[NUM_LEDS / 2 - i] = CHSV(0, 255, 0);
    leds[NUM_LEDS / 2 + i] = CHSV(0, 255, 0);
    FastLED.show();
    delay(6);
  }
}

void runRandomDote() {
  for (int i = NUM_LEDS; i > 0; i--)
    leds[i] = leds[i - 1];
  !random(0, 5) ? leds[0].setRGB(color[0], color[1], color[2]) : leds[0].setRGB(0, 0, 0);
  delay(100);
}

void reversRainbowWave() {
  fill_rainbow(leds, NUM_LEDS, counter--);
}

void actual_to_end() {
  CRGB led = leds[NUM_LEDS - 1];
  for (int i = NUM_LEDS - 1; i >= 0; i--)
    leds[i] = leds[i - 1];
  leds[0] = led;
}

void actual_to_start() {
  CRGB led = leds[0];
  for (int i = 0; i < NUM_LEDS - 1; i++)
    leds[i] = leds[i + 1];
  leds[NUM_LEDS - 1] = led;
}

void longWorm() {
  bool flag = true;
  for (int i = 0; i < NUM_LEDS; i++)
    if (leds[i].r != 0 || leds[i].g != 0 || leds[i].b != 0)
      flag = false;
  if (flag) {
    len = random(NUM_LEDS / 2, NUM_LEDS * 2);
    index = 0;
  }
  if (index < 60)
    leds[index].setRGB(color[0], color[1], color[2]);
  if (index - len >= 0)
    leds[index - len] = CHSV(0, 255, 0);
  index++;
}

void runWorm() {
  bool flag = true;
  for (int i = 0; i < NUM_LEDS; i++)
    if (leds[i].r != 0 || leds[i].g != 0 || leds[i].b != 0)
      flag = false;
  if (flag)
    for (int i = 0; i < NUM_LEDS / 10; i++){
      float modif = sin(my_map(i, 0, NUM_LEDS / 10 - 1, 0.0, 3.14));
      leds[i].setRGB((int)((1 - modif) * 0 + modif * color[0]), (int)((1 - modif) * 0 + modif * color[1]), (int)((1 - modif) * 0 + modif * color[2]));
    }
  if (leds[0].r != 0 || leds[0].g != 0 || leds[0].b != 0 || leds[NUM_LEDS - 1].r != 0 || leds[NUM_LEDS - 1].g != 0 || leds[NUM_LEDS - 1].b != 0)
    direction = !direction;
  direction ? actual_to_end() : actual_to_start();
}

void fier() {  // время 1:50 мне лень думать как оно устроено но выглядит нормально, по этому просто подправлю под себя
  static byte heat[NUM_LEDS];
  int cooldown;
  byte lenFire = 55;
  byte lenSparks = 120;
  // Step 1.  Cool down every cell a little
  for (int i = 0; i < NUM_LEDS; i++) {
    cooldown = random(0, ((lenFire * 10) / NUM_LEDS) + 2);
    (cooldown > heat[i]) ? heat[i] = 0 : heat[i] = heat[i] - cooldown;
  }
  // Step 2.  Heat from each cell drifts 'up' and diffuses a little
  for (int k = NUM_LEDS - 1; k >= 2; k--)
    heat[k] = (heat[k - 1] + heat[k - 2] + heat[k - 2]) / 3;
  // Step 3.  Randomly ignite new 'sparks' near the bottom
  if (random(255) < lenSparks) {
    int y = random(7);
    heat[y] = heat[y] + random(160, 255);
  }
  // Step 4.  Convert heat to LED colors
  for (int j = 0; j < NUM_LEDS; j++) {
    byte t192 = round((heat[j] / 255.0) * 191);
    // calculate ramp up from
    byte heatramp = t192 & 0x3F;  // 0..63
    heatramp <<= 2;               // scale up to 0..252
    // figure out which third of the spectrum we're in:
    if (t192 > 0x80) {  // hottest
      leds[j].setRGB(255, 255, heatramp);
    } else if (t192 > 0x40) {  // middle
      leds[j].setRGB(255, heatramp, 0);
    } else {  // coolest
      leds[j].setRGB(heatramp, 0, 0);
    }
  }
}

void withSpawnworm() {
  byte lenWorm = 10;
  leds[index] = CHSV(0, 255, 255);
  if (index - NUM_LEDS >= 0) leds[index - NUM_LEDS] = CHSV(0, 255, 0);
}

void smallFastSinusTrain() {
  // for (int i = 0; i < NUM_LEDS; i++)
  //   leds[i] = CHSV(0, 255, int(sin(my_map(counter += 30, 0, 255, 0.0, 3.14)) * 255));
  for (int i = 0; i < NUM_LEDS; i++){
    float modif = sin(my_map(counter += 30, 0, 255, 0.0, 3.14));
    leds[i].setRGB((int)((1 - modif) * 0 + modif * color[0]), (int)((1 - modif) * 0 + modif * color[1]), (int)((1 - modif) * 0 + modif * color[2]));
  }
}

void whiteFlashesOnWhite() {
  for(byte i = 0; i < NUM_LEDS; i++)
    leds[i].setRGB(color[0]*0.5, color[1]*0.5, color[2]*0.5);
  float modif = my_map(random(100, 255), 100, 255, 0.4, 1.0);
  leds[random(0, NUM_LEDS)].setRGB((int)((1 - modif) * 0 + modif * color[0]), (int)((1 - modif) * 0 + modif * color[1]), (int)((1 - modif) * 0 + modif * color[2]));
  delay(300);
}

void lotsOfRedDots() {
  bool flag = true;
  for (int i = 0; i < NUM_LEDS; i++)
    if (leds[i].r != 0 || leds[i].g != 0 || leds[i].b != 0)
      flag = false;
  if (flag)
    for (int i = 0; i < NUM_LEDS; i += 3) leds[i].setRGB(color[0], color[1], color[2]);
  actual_to_end();
}

void lotsOfRainbowDots() {
  ++step %= 3;
  one_color_all(0, 0, 0);
  for (int i = 0; i < NUM_LEDS; i += 3) leds[i + step] = CHSV(counter + i * 2, 255, 255);
  counter++;
}

void flickering() {
  random(0, 2) ? one_color_all(color[0], color[1], color[2]) : one_color_all(0, 0, 0);
}

void bouncingBalls() {
  one_color_all(0, 0, 0);
  for (int i = 0; i < BallCount; i++) {
    TimeSinceLastBounce[i] = millis() - ClockTimeSinceLastBounce[i];
    Height[i] = 0.5 * Gravity * pow(TimeSinceLastBounce[i] / 1000, 2.0) + ImpactVelocity[i] * TimeSinceLastBounce[i] / 1000;
    if (Height[i] < 0) {
      Height[i] = 0;
      ImpactVelocity[i] = Dampening[i] * ImpactVelocity[i];
      ClockTimeSinceLastBounce[i] = millis();
      if (ImpactVelocity[i] < 0.01) 
        ImpactVelocity[i] = ImpactVelocityStart;
    }
    Position[i] = round(Height[i] * (NUM_LEDS - 1) / StartHeight);
  }
  for (int i = 0; i < BallCount; i++)
    leds[Position[i]].setRGB(color[0], color[1], color[2]);
}