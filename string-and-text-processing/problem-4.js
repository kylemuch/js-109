//input: string
//output: string

//create an empty string to store our result
//split the string into an array of words
//for each word in the array, add the uppercase version to the string
//return the string

function wordCap(string) {
  let formattedString = '';
  let stringArr = string.split(" ");

  stringArr.forEach(word => formattedString += (word[0].toUpperCase() + word.slice(1).toLowerCase() + " "));

  return formattedString;
}

console.log(wordCap('four score and seven'));