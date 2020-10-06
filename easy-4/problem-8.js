function wordSizes(string) {
  let strArr = string.split(" ");
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

console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
