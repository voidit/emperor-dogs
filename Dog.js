"use strict";

class Dog {
  // takes parameters {name, attitude, size, eyeColor, bark, place}
  constructor(params) {
    this.name = params.name;
    this.attitude = params.attitude;
    this.size = params.size;
    this.eyeColor = random(["magenta", "green", "purple", "red", "yellow", "orange", "blue", "brown", "black"]); // params.eyeColor;
    this.bark = params.bark;
    this.wink = false;
    this.acceleration = Math.floor(random(3)) + 1
    this.stepX = this.acceleration;
    this.stepY = this.acceleration;
    this.boundaries = {
      x: params.place[0],
      y: params.place[1],
      w: params.place[0] + this.size[0] * 2,
      h: params.place[1] + this.size[1],
    }
  }

  talk() {
    // print(`${this.name} (${this.attitude}ly): ${this.bark}`);
    // display talk text next to the dog
    text(`${this.name} (${this.attitude}ly): ${this.bark}`, this.boundaries.x, this.boundaries.h);
  }

  sit() {
    if (mouseX >= this.boundaries.x && mouseX <= this.boundaries.w && mouseY >= this.boundaries.y && mouseY <= this.boundaries.h) {
      this.wink = true;
      this.talk();
    } else {
      this.wink = false;
    }

    fill(color(this.eyeColor));
    noStroke();
    ellipse(this.boundaries.x, this.boundaries.y, this.size[0], this.size[1]);
    if (this.wink === true) fill(color('black'));
    ellipse(this.boundaries.x + this.size[0], this.boundaries.y, this.size[0], this.size[1]);
  }

  wonderWalk() {
    let dice = Math.floor(random(8));

    // prevent dogs going over the border
    if (this.boundaries.w >= width) {
      this.stepX = -1;
    }
    if (this.boundaries.x <= 0) {
      this.stepX = 1;
    }
    if (this.boundaries.h >= height) {
      this.stepY = -1;
    }
    if (this.boundaries.y <= 0) {
      this.stepY = 1;
    }

    switch (dice) {
      case 1:
        this.boundaries.x += this.stepX;
        break;
      case 2:
        this.boundaries.y += this.stepY;
        break;
      case 3:
        this.boundaries.x -= this.stepX;
        break;
      case 4:
        this.boundaries.y -= this.stepY;
        break;
      case 5:
        this.boundaries.x += this.stepX * this.acceleration; // bigger step
        break;
      case 6:
        this.boundaries.y += this.stepY * this.acceleration;
        break;
      case 7:
        this.boundaries.x -= this.stepX * this.acceleration;
        break;
      case 8:
        this.boundaries.y -= this.stepY * this.acceleration;
        break;

      default:
        break;
    }

    // update boundaries
    this.boundaries.w = this.boundaries.x + this.size[0] * 2;
    this.boundaries.h = this.boundaries.y + this.size[1];

    this.sit();
  }
}
