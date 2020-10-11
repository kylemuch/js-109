// input: string
// output: array of strings

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

function palindromes(string) {
  let substringArr = substrings(string);

  let palindromeArr = substringArr.filter( el => {
    if (el.length === 1) {
      return false;
    } else {
      return el === el.split("").reverse().join("");
    }
  })

  return palindromeArr;
}

console.log(palindromes('knitting cassettes'));