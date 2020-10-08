// input: array
// output: array containing two subarrays.
// each subarray contains half of the original array.
// if there is an odd number of elements the middle element goes in the first half array.

function halvsies(array) {

  let halfwayIndex = Math.ceil(array.length / 2);
  let subArr1 = array.slice(0, (halfwayIndex));
  let subArr2 = array.slice(halfwayIndex);

  return [subArr1, subArr2];
}

let myArr = [1,2,3,4,5];

console.log(halvsies(myArr));
