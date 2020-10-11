//input: string
//output: string

function swapCase(string) {
  let charArr = string.split("");
  let swapString = "";

  charArr.forEach(char => {
    if (char === char.toLowerCase()) {
      swapString += char.toUpperCase();
    } else {
      swapString += char.toLowerCase();
    }
  })

  return swapString;
}

console.log(swapCase('Tonight on XYZ-TV'));