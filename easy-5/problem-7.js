function digitList(int) {
  return String(int).split("").map(el => Number(el));
}

console.log(digitList(12345));