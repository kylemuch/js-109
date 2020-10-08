//input: array of integers
//output: floating point number rounded to 3 decimal places

function multiplicativeAverage(arr) {
  //store the product of all of the elements in the array
  //store the length of the array
  //return the result of dividing the sum by the length rounded to 3 decimal places.
  let arrProduct = arr.reduce((a, b) => a * b);
  let arrLength = arr.length;

  return (arrProduct / arrLength).toFixed(3);

}

let myArr = [2, 5, 7, 11, 13, 17];

console.log(multiplicativeAverage(myArr));