// input: array
// output: integer


//loop through an array
// set sum equal to the first element in the array;
// then sum += sum + the next element
// return sum;

function sumOfSums(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr.slice(0, i + 1).reduce((a, b) => a + b);
  }

  return sum;
}

console.log(sumOfSums([1,5,7,3]));

//remember, splice mutates the array, you were trying to create a copy of subarray on each iteration and utilize that, instead you were mutating the original array and getting the wrong result. 