//Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

let readline = require("readline-sync");

const SQMETERS_TOSQFEET = 10.7639;



function getMeters(lengthOrWidth) {
  console.log(`Please enter the ${lengthOrWidth} of the room in meters.`);
  let meters = Number.parseFloat(readline.prompt());

  while (Number.isNaN(meters) || meters < 0) {
    console.log('Invalid input, you must enter a positive number.');
    getMeters();
  }

  console.log(`Thanks, you specified the ${lengthOrWidth} of the room is ${meters} meters.`);

  return meters;
}

let lengthMeters = getMeters('length');
let widthMeters = getMeters('width');

function logArea(length, width) {
  let areaInFeet = (lengthMeters * widthMeters * SQMETERS_TOSQFEET).toFixed();
  let areaInMeters = (lengthMeters * widthMeters).toFixed();

  console.log(`The area of the room in meters is: ${areaInMeters} meters.`);
  console.log(`The area of the room in feet is: ${areaInFeet} feet.`);

}

logArea(lengthMeters, widthMeters);


