//write a funtion that takes a string as an argument
//output: return a string

//replace each non-alphanumeric character with a " ". There should never be more than one space in a row.

//loop through the string and check if each character is a letter.

//if it is a letter, add it to the accumulator string

//if it's not a letter then add a space to the accumulator unless the current string is a " ". If it is move to the next iteration of the loop.

function cleanUp(string) {
  let cleanString = "";

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] >= 'a' && string[i] <= 'z') {
      cleanString += string[i];
    } else if (cleanString.endsWith(" ")){
      continue;
    } else {
      cleanString += " ";
    }
  }

  return cleanString;
}

console.log(cleanUp("---what's my +*& line?"));
console.log(cleanUp("st***ay a whi&*(le and listen"))
