// write a function that takes two arguments, each containing a list of numbers, and returns a new array containing the product of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

// input: two arrays
// output: a single array sorted in ascending numerical order

//write a function that takes two arrays as arguments
// function multiplyAllPairs(arr1, arr2) { <= works but uses for loops so it's way longer. 
//   //create an empty array to store the products in
//   let productArr = [];
//   //loop through every element of array 1 and store each value.
//   let i;
//   for (i = 0; i < arr1.length; i += 1) {
//     let currNum = arr1[i];
//     let j;
//     for (j = 0; j < arr2.length; j += 1) {
//       productArr.push(currNum * arr2[j])
//     }
//   }
//   productArr.sort((b, a) => b - a);
//   return productArr;
// }

function multiplyPairs(arr1, arr2) {
  let products = [];
  arr1.forEach(el1 => {
    arr2.forEach(el2 => products.push(el1 * el2));
  })
  return products.sort((a, b) => a - b);
}

// create a sub loop that loops through every element of loop two and multiplies each element by each value from array 1
// add that value (product) to the array we are storing the products in
// sort the productArr in ascending numerical order

console.log(multiplyPairs([2, 4], [4, 3, 1, 2]));

//Challenges:
  // Always make sure you are running the right file so you don't look like a jerk
  // You used arr instead of arr1, slow down and make sure you are using the right variables even if you are doing something simple like a for loop.