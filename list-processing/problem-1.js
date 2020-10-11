//input: integer
//output: sum of each of the digits in the integer, as an integer

function sum(int) {
  let intArr = String(int).split("");
  return intArr.reduce((a,b) => +a + +b);
}

console.log(sum(123456789));