//Write a function that determines and returns the ASCII string value of a string passed in as an argument.The ASCII string value is the sum of the ASCII values of every character in the string. (You may use String.prototype.charCodeAt() to determine the ASCII value of a character.)

// create a function that takes a string as it's input
// check each character for it's ASCII string using a built in method
// accumulate the ASCII values in a variable and return it after the value is calculated.

const asciiValue = (string) => {
  let accumulator = 0;

  for (let i = 0; i < string.length; i += 1) {
    accumulator += string.charCodeAt(i);
  }

  return accumulator;
}


console.log(asciiValue('Four score') === 984)
console.log(asciiValue('Launch School') === 1251)
console.log(asciiValue('a') === 97)
console.log(asciiValue('') === 0)