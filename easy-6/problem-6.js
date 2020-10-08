function sequence(num) {
  let numArr = [];

  for (let i = 1; i <= num; i += 1) {
    numArr.push(i);
  }

  return numArr;
}

console.log(sequence(20));