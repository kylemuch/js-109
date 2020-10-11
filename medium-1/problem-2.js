//input: two numbers
  //original numbers
  //count of digits to rotate
//output: the rotated number

//rules:
  //rotate the last count digits of the original number
    // fn(23456, 2) => 23465
    // fn(23456, 4) => 24563

//Algorithm
  //convert the number to a string.
  //split the string into two parts, the digits to leave alone and the digits to change
  //remove the last number in the 2nd set and add it to the beginning
  //combine the two strings
  //convert the combined string to a number
  //return the number


function rotateRightmostDigits(num, count) {
  let numString = String(num);
  let firstPart = numString.slice(0, numString.length - count);
  let secondPart = numString.slice(numString.length - count);

  return Number(firstPart + rotateString(secondPart));
}

function rotateString(str) {
  return str.slice(1) + str[0];
}

console.log(rotateRightmostDigits(735291789, 3));