//input: two arrays
//output: a single array consisting of all of the values in each array with no duplicates.
//I want to combine the two arrays into a single array for the first step.
//Then I want to remove any duplicate elements.

function union(arr1, arr2) {
  let combinedArr = arr1.concat(arr2);
  let uniqueArr = [];

  combinedArr.forEach(el => {
    if (uniqueArr.indexOf(el) === -1) {
      uniqueArr.push(el);
    }
  })

  return uniqueArr;
}

console.log(union([1,3,5], [3,6,9]));
