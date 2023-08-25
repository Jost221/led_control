int GPH(int index){ // getPlusHalf
  return (index+NUM_LEDS/2)%NUM_LEDS;
}

void PluslIndex(){
  index = (index+1)%NUM_LEDS;
}

int GFT(int index){ //get first third
  return (index+NUM_LEDS/3)%NUM_LEDS;
}

int GST(int index){ //get second third
  return (index+NUM_LEDS*2/3)%NUM_LEDS;
}

float my_map(float value, float min, float max, float min_res, float max_res){
  return (((max_res-min_res)/(max-min))*(value-min))+min_res;
}

int GRV(int index){ //get reverse value
  return (NUM_LEDS-index);
}