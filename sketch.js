"use strict";

let dogs = [];
let howManyDogs = 9;
let names = ["snoopy", "Bubble", "Zak", "Buddy", "Mops", "Lala", "Rafael", "Mozart"],
  attitudes = ["easygoing", "friendly", "complicated", "smily", "dramatic"],
  sizes = [
    [10, 10],
    [20, 20],
    [30, 30]
  ],
  eyeColors = ["magenta", "green", "purple", "orange", "blue", "brown"],
  barks = ["Rhoof!", "Tiaf-tiaf!", "Grrrrr!", "Bark!", "Sniff-snoof!", "Oh-la-la!"];

let dice = 0;

// Examples use Random User API:
// https://randomuser.me/documentation
let users = null;
let data = null;
let barksData = null;

function preload() {
  // barksData = loadJSON('prompts.json');
  data = loadJSON(`https://randomuser.me/api/?results=${howManyDogs}`);
}

function setup() {
  createCanvas(720, 480);
  if (data.results) {
    users = data.results;
    console.log(users);
  } else {
    console.log(data);
  }
  
  if(barksData){
    barks = barksData;
    console.log(barks);
  }

  if (users) {
    let stepH = width / howManyDogs;
    let stepV = height / howManyDogs;
    dice = Math.floor(random(howManyDogs));

    for (let n = 0; n < users.length; n++) {
      let user = users[n];
      let lat = width / 2 + Math.floor(int(user.location.coordinates.latitude));
      let long = height / 2; + Math.floor(int(user.location.coordinates.longitude));
      let options = {
        name: user.name.first,
        attitude: random(attitudes),
        size: random(sizes),
        eyesColor: random(eyeColors),
        bark: random(barks).draw,
        place: [lat, long],
        picture: user.picture.thumbnail,
      };
      dogs.push(new Dog(options));
      dogs[n].showPicture();
      dogs[n].talk();
      dogs[n].sit();
    }
  }
}

function draw() {
  // background('#ccc');

  // for (let i = 0; i < dogs.length; i++) {
  //   if (keyIsPressed === true) {
  //     dice = Math.floor(random(howManyDogs)); // reset dice
  //     dogs[i].reset();
  //   }
  //   dogs[i].wonderWalk(dice);
  // }
}