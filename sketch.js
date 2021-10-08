"use strict";

let dogs = [];
let names = ["sneha", "Bharti", "Zain", "Buddha", "Manish", "Laxmi", "Rachel", "Monish"],
  attitudes = ["easygoing", "friendly", "complicated", "smily", "dramatic"],
  sizes = [
    [10, 10],
    [20, 20],
    [30, 30]
  ],
  eyeColors = ["magenta", "green", "purple", "orange", "blue", "brown"],
  barks = ["hi", "namste", "ciao", "hoa", "satsriyakal", "salam"];

let dice = 0;

function setup() {
  createCanvas(720, 480);
  let stepH = width / (names.length + 2);
  let stepV = height / (names.length + 2);
  dice = Math.floor(random(10));

  for (let n = 0; n < names.length; n++) {
    let options = {
      name: names[n],
      attitude: random(attitudes),
      size: random(sizes),
      eyesColor: random(eyeColors),
      bark: random(barks),
      place: [stepH * (n + 1), stepV * (n + 1)],
    };
    dogs.push(new Dog(options));
    dogs[n].sit();
  }
}

function draw() {
  background('#fae');
//   for (let i = 0; i < dogs.length; i++) {
//     dogs[i].sit();
//   }
// }

// function keyPressed() {
  for (let i = 0; i < dogs.length; i++) {
    if (keyIsPressed === true) {
      dice = Math.floor(random(10)); // reset dice
      dogs[i].reset();
    }
    dogs[i].wonderWalk(dice);
  }
}
