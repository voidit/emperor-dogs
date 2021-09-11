"use strict";
let dogs = [];
let names = ["Fanya", "Bubble", "Zak", "Buddy", "Mops", "Lala", "Rafael", "Mozart"], 
    attitudes = ["easygoing", "friendly", "complicated", "smily", "dramatic"], 
    sizes = [[10, 10], [20, 20], [30,30]], 
    eyeColors = ["magenta","green", "magenta", "orange", "blue", "brown"], 
    barks = ["Rhoof!", "Tiaf-tiaf!", "Grrrrr!", "Bark!", "Sniff-snoof!", "Oh-la-la!"];

function setup() {
  createCanvas(720, 480);
  
  for (let n=0; n<names.length; n++){
    let options = { 
        name: names[n],
        attitude: random(attitudes),
        size: random(sizes),
        eyesColor: random(eyeColors),
        bark: random(barks),
        place: [width/(names.length+1)*(n+1), height/2],
      };
    dogs.push(new Dog(options));
    dogs[n].sit();
  }
}

function draw() {
  // for (let i=0; i<dogs.length; i++){
  //   dogs[i].sit();
  // }
}
