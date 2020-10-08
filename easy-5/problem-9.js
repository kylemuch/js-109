// input: array
// output: integer rounded down to the nearest integer

//reduce the integer to a single value by adding each element

function average(arr) {
  let sum = arr.reduce((a,b) => a + b);
  let length = arr.length;

  return Math.floor(sum / length);
}

console.log(average([1,5,87,45,8,8]));