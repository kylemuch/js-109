// input: two arrays of numbers
// output: new array

//create an empty array to keep the values in

//loop through one array and use the index to access the elements in each array

//multiply elements with the same index and then add them to the new array

function multiplyList(arr1, arr2) {
  let productArr = [];

  arr1.forEach((el, i) => productArr.push(el * arr2[i]))

  return productArr;
}

console.log(multiplyList([3,5,7], [9,10,11]));

