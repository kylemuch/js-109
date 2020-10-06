function randomNum () {
  // get a random number between 0 and 1.
  // it needs to 20 - 120 inclusive
  // so if we multiply it by the difference between the two, round
  // it and add 20, we'll be within out range
  // 0 is included so if we add 20 to the num we can hit 20
  // 1 is excluded so if we add 20 we cannot hit 120
  // if we make the number Math.random() * 101, we have access to
  // the entire range after we round.

  let age = Math.floor(Math.random() * 101) + 20;

  console.log(`Teddy is ${age} years old!`);
}

randomNum();
randomNum();
randomNum();
randomNum();
randomNum();