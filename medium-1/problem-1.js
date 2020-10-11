//input: array
//output: array/undefined

//Check if the argument is an array. If not return undefined
//Make a copy of the array, we don't want to mutate the original
//remove and store the last element of the array
//add it to the beginning of the copy of the array.

function rotateArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;

  let arrCopy = arr.slice(0);

  arrCopy.unshift(arrCopy.pop());

  return arrCopy;
}

let arr = [];

console.log(rotateArray(arr));