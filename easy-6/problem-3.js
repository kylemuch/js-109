//stringify, array-ify, chop the 0 elements, reverse, stringify, numberfy, return

function reverseNumber(num) {
  let numArr = String(num).split("").reverse();
  numArr = parseInt(numArr.join(""));
  return numArr;
}

console.log(reverseNumber(12345))