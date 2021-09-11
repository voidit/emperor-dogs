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
    this.stepX = 1;
    this.stepY = 1;
  }

  talk() {
    // print(`${this.name} (${this.attitude}ly): ${this.bark}`);
    // display talk text next to the dog
    text(`${this.name} (${this.attitude}ly): ${this.bark}`, this.place[0], this.place[1]);
  }

  sit() {
    if ((mouseX - this.size[0]) >= this.place[0] && (mouseY - this.size[1]) >= this.place[1]) {
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

    // prevent dogs going over the border
    if (this.place[0] >= width) {
      this.stepX = -1;
    }
    if (this.place[0] <= 0) {
      this.stepX = 1;
    }
    if (this.place[1] >= height) {
      this.stepY = -1;
    }
    if (this.place[1] <= 0) {
      this.stepY = 1;
    }

    switch (dice) {
      case 1:
        this.place[0] += this.stepX;
        break;
      case 2:
        this.place[1] += this.stepY;
        break;
      case 3:
        this.place[0] -= this.stepX;
        break;
      case 4:
        this.place[1] -= this.stepY;
        break;
      case 5:
        this.place[0] += this.stepX * 5;
        break;
      case 6:
        this.place[1] += this.stepY * 5;
        break;
      case 7:
        this.place[0] -= this.stepX * 5;
        break;
      case 8:
        this.place[1] -= this.stepY * 5;
        break;

      default:
        break;
    }

    this.sit();
  }
}