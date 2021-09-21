"use strict";

class Dog {
  // takes parameters {name, attitude, size, eyeColor, bark, place}
  constructor(params) {
    this.name = params.name;
    this.attitude = params.attitude;
    this.size = params.size;
    this.eyeColor = random(["magenta", "green", "purple", "red", "yellow", "orange", "blue", "brown"]); // params.eyeColor;
    this.bark = params.bark;
    this.wink = false;
    this.speed = createVector(0.5, 0.3);
    this.step = createVector(2, 5);
    this.place = createVector(params.place[0], params.place[1]);
    this.boundaries = {
      x: params.place[0],
      y: params.place[1],
      w: params.place[0] + this.size[0] * 2,
      h: params.place[1] + this.size[1],
    }
  }

  reset() {
    this.place = createVector(random(width), random(height));
    this.speed = createVector(random(1), random(1));
    this.step = createVector(random(3), random(3));
    this.boundaries = {
      x: this.place[0],
      y: this.place[1],
      w: this.place[0] + this.size[0] * 2,
      h: this.place[1] + this.size[1],
    }
  }

  talk() {
    // print(`${this.name} (${this.bark}): ${this.attitude}ly`);
    // display talk text next to the dog
    text(`${this.name} (${this.bark}): ${this.attitude}, ${this.boundaries.x}, ${this.boundaries.h}`);
  }

  sit() {
    // if (mouseX >= this.boundaries.x && mouseX <= this.boundaries.w && mouseY >= this.boundaries.y && mouseY <= this.boundaries.h) {
    //   this.wink = true;
    //   this.talk();
    // } else {
    //   this.wink = false;
    // }

    fill(color(this.eyeColor));
    noStroke();
    ellipse(this.boundaries.x, this.boundaries.y, this.size[0], this.size[1]);
    if (this.wink === true) fill(color('black'));
    ellipse(this.boundaries.x + this.size[0], this.boundaries.y, this.size[0], this.size[1]);
  }

  wonderWalk(dice) {
    let revertX = createVector(-1, 1);
    let revertY = createVector(1, -1);

    // prevent dogs going over the border horizontally
    if (this.boundaries.w > width || this.boundaries.x < 0) {
      this.step.mult(revertX);
    }
    // prevent dogs going over the border vertically
    if (this.boundaries.h > height || this.boundaries.y < 0) {
      this.step.mult(revertY);
    }

    switch (dice) {
      case 1:
        this.boundaries.x = this.place.add(this.step).x;
        break;
      case 2:
        this.boundaries.y = this.place.add(this.step).y;
        break;
      case 3:
        this.boundaries.x = this.place.sub(this.step).x;
        break;
      case 4:
        this.boundaries.y = this.place.sub(this.step).y;
        break;
      case 5:
        this.step.add(this.speed);
        this.boundaries.x = this.place.add(this.step).x;
        break;
      case 6:
        this.step.add(this.speed);
        this.boundaries.y = this.place.add(this.step).y;
        break;
      case 7:
        this.step.sub(this.speed);
        this.boundaries.x = this.place.sub(this.step).x;
        break;
      case 8:
        this.step.sub(this.speed);
        this.boundaries.y = this.place.sub(this.step).y;
        break;
      case 9:
        this.boundaries.x = this.size[0];
      case 10:
        this.boundaries.y = this.size[1];
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