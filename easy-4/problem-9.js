function wordSizes(string) {
  let strArr = string.split(" ").map(el => removeNonAlphas(el));
  let counterObj = {};

  for (let i = 0; i < strArr.length; i += 1) {
    let currLength = strArr[i].length;

    if (counterObj[currLength]) {
      counterObj[currLength] += 1;
    } else {
      counterObj[currLength] = 1;
    }
  }

  return counterObj;
}

function removeNonAlphas(string) {
  let newString = "";

  for (let i = 0; i < string.length; i += 1) {
    let char = string[i].toLowerCase();

    if (char >= 'a' && char <= 'z') {
      newString += char;
    }
  }

  return newString;
}

console.log(wordSizes('Four score and seven.'));
