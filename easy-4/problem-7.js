function runningTotal (arr) {
  let totalArr = [];

  //loop through arr, any index > 0 will have the previous index added to it.
  // push index 0 in first.

  arr.forEach((el, i, innerArr) => {
    if (i === 0) {
      totalArr.push(el);
    } else {
      totalArr.push(el + innerArr[i - 1]);
    }
  })

  return totalArr;
}

console.log(runningTotal([2,4,6]))