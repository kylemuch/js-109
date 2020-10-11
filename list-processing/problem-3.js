//input: two arrays containing numbers.
//output: a new array containing the products of all combinations of numbers that exist between the two array.

function multiplyAllPairs (arr1, arr2) {
  let productArr = [];

  arr1.forEach(el => {
    arr2.forEach(innerEl => productArr.push(el * innerEl));
  })

  console.log(productArr.sort((a, b) => b - a));
}

multiplyAllPairs([2,4], [4,3,1,2]);

// Array.prototype.sort((a, b) => a - b); will always sort an array of numbers in ascending order.
// Array.prototype.sort((a, b) => b - a); will always sort an array of numbers in descending order.

// If the callback function returns a positive number, then b will be placed before a. If you subtract the numbers and a positive number is returned

console.log([1,2,3,4,5].sort((a, b) => b - a));