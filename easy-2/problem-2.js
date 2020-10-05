let readlineSync = require("readline-sync");

console.log("What is your name?")
let name = readlineSync.prompt();

if (name.endsWith("!")) {
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`)
}

