//input: array
//output: array

//loop through the array to access each string
//turn each string into an array of characters
//filter any character elements out that are vowels
//turn the filtered array into a string and push it into the new array

function removeVowels(arr) {
  let noVowels = [];

  arr.forEach(el => {
    noVowels.push(el.split("").filter(el => !['a','e','i','o','u'].includes(el.toLowerCase())).join(""));
  })

  return noVowels;
}

console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));

//hackin and slashin bro, make sure to account for upper/toLowerCase