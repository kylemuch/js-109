function sequence(count, start) {
  let seqArr = [];

  if (count === 0) return seqArr;

  for (let i = 1; i <= count; i += 1) {
    seqArr.push(start * i);
  }

  return seqArr;
}

console.log(sequence(4, -7));