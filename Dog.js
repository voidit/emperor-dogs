"use strict";

class Dog {
  // takes parameters {name, attitude, size, eyeColor, bark, place}
  constructor(params){
    this.name = params.name;
    this.attitude = params.attitude;
    this.size = params.size;
    this.eyeColor = random(["magenta","green", "magenta", "orange", "blue", "brown"]); // params.eyeColor;
    this.bark = params.bark;
    this.place = params.place;
    this.wink = false;
  }
  
  talk(){
    print(`${this.name} (${this.attitude}ly): ${this.bark}`);
  }
  
  sit(){
    if((mouseX - this.size[0]) >= this.place[0]){
      this.wink = true;
      this.talk();
    } else {
      this.wink = false;
    }
    
    fill(color(this.eyeColor));
    noStroke();
    ellipse(this.place[0], this.place[1], this.size[0], this.size[1]);
    if (this.wink === true) fill(color('black'));
    ellipse(this.place[0]+this.size[0], this.place[1], this.size[0], this.size[1]);
  }
}
