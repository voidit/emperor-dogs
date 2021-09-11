"use strict";

class Dog {
  // takes parameters {name, attitude, size, eyeColor, bark, place}
  constructor(params) {
    this.name = params.name;
    this.attitude = params.attitude;
    this.size = params.size;
    this.eyeColor = random(["magenta", "green", "magenta", "orange", "blue", "brown"]); // params.eyeColor;
    this.bark = params.bark;
    this.place = params.place;
    this.wink = false;
    this.step = 1;
    this.jump = 5;
  }

  talk() {
    print(`${this.name} (${this.attitude}ly): ${this.bark}`);
  }

  sit() {
    if ((mouseX - this.size[0]) >= this.place[0]) {
      this.wink = true;
      this.talk();
    } else {
      this.wink = false;
    }

    fill(color(this.eyeColor));
    noStroke();
    ellipse(this.place[0], this.place[1], this.size[0], this.size[1]);
    if (this.wink === true) fill(color('black'));
    ellipse(this.place[0] + this.size[0], this.place[1], this.size[0], this.size[1]);
  }

  wonderWalk() {
    let dice = Math.floor(random(8));

    switch (dice) {
      case 1:
        this.place[0] += this.step;
        break;
      case 2:
        this.place[1] += this.step;
        break;
      case 3:
        this.place[0] -= this.step;
        break;
      case 4:
        this.place[1] -= this.step;
        break;
      case 5:
        this.place[0] += this.jump;
        break;
      case 6:
        this.place[1] += this.jump;
        break;
      case 7:
        this.place[0] -= this.jump;
        break;
      case 8:
        this.place[1] -= this.jump;
        break;

      default:
        break;
    }

    this.sit();
  }
}