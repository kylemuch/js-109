function swap(string) {
  let arrString = string.split(" ");
  let swapArr = [];

  for (let i = 0; i < arrString.length; i += 1) {
    let wordArr = arrString[i].split("");

    if (wordArr.length > 1) {
      let first = wordArr[0];
      wordArr.shift();
      let last = wordArr.pop();
      wordArr.unshift(last);
      wordArr.push(first);
    }

    // swapArr.push(wordArr.join(""));
    swapArr[i] = arrString[i][0] + 
  }

  return swapArr.join(" ");
}

console.log(swap('Oh what a wonderful day it is'));
