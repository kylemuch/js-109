// input: two arrays
// output: one array

function interLeave(arr1, arr2) {
  //using a for loop, iterate over each array and push the item at i index into a new array. Then return the array.
  let combinedArr = [];

  for (let i = 0; i < arr1.length; i += 1) {
    combinedArr.push(arr1[i]);
    combinedArr.push(arr2[i]);
  }

  return combinedArr;
}

let testArr = [1,2,3];
let testArr2 = ['a', 'b', 'c'];

console.log(interLeave(testArr, testArr2));