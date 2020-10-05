//write a function that takes an integer.
//if the integer is a double number return the number
  //test if it has an even number of digits
  //compare the first half to last half
    //convert int to string
    //store string length
    // str.slice(0, (string.length / 2))
    //(str.slice(str.length - (string.length / 2)))
    //if the first half is === to the last half, return the number
//otherwise double the number.

function twice(int) {
  let intString = String(int);
  let length = intString.length;
  let firstHalf = intString.slice(0, (length / 2));
  let secondHalf = intString.slice((length / 2))

  if (firstHalf === secondHalf) {
    return int;
  } else  {
    return int * 2;
  }
}

console.log(twice(7676));