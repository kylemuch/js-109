//input: string
//output: array of strings

//loop through the string provided. Add each character to an empty string and push that string into an array with each iteration.

function leadingSubstrings(string) {
  let newArr = [];
  let currentSubstring = "";

  string.split("").forEach(el => {
    currentSubstring += el;
    newArr.push(currentSubstring);
  })

  return newArr;
}

console.log(leadingSubstrings('xyzzy'));