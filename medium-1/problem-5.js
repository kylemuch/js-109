//split the string into a space separated array.
//if the element can be coerced to a number, we need to look up the number word using the digit as a key.
//we then need to splice in the number word wherre the digit is, convert the array back to a string and return the string.

function wordToDigit(string) {
  let stringArr = string.split(" ");

  let numWordsArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

  stringArr.forEach((el,i) => {
    el = stripPunctuation(el);
    if (numWordsArr.includes(el)) {
      console.log(true);
      stringArr.splice(i, 1, numWordsArr.indexOf(el));
    }
  })

  console.log(stringArr)
  return stringArr.join(" ");
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'))


function stripPunctuation(word){
  let wordArr = word.split("").filter(el => el.toLowerCase() >= 'a' && el.toUpperCase() <= 'z');
  return wordArr.join("");
}

