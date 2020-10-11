// input: string
// output: an array of strings

// return an array containing all of the substrings in string in the order they appear in the string.

//Example:
  //substrings('abc') => ['a', 'ab', 'abc', 'b', 'bc', 'c'];

//algorithm:
  // create an empty array to store our substrings in
  // loop over every character in the string.
      // add the character at i to the array.
      // create a subloop for every character that starts at i + 1 and executes while i less than the length of the string. You will push arr[i] + arr[j] into the array during each iteration.

function substrings(string) {
  let substringArr = [];

  for (let i = 0; i < string.length; i += 1) {
    substring = string[i];
    substringArr.push(substring);
    for (let j = i + 1; j < string.length; j += 1) {
      substring += string[j];
      substringArr.push(substring);
    }
  }

  return substringArr;
}

console.log(substrings('abcde'));
