function rotateRightmostDigits(num, count) {
  let numString = String(num);
  let firstPart = numString.slice(0, numString.length - count);
  let secondPart = numString.slice(numString.length - count);

  return Number(firstPart + rotateString(secondPart));
}

function rotateString(str) {
  return str.slice(1) + str[0];
}

//this function will take an array as an argument and perform the maximum rotation of the original number.

//Algorithm:
  //we can perform this rotation using just the rotateRightmostDigits function and modifiying the count we pass to it.

  //if pass in 0 as the count, the first digit will be rotated, then we pass in 1,

  //1 call rotate string on the whole Array,

  //2 call rotate string on

  function maxRotation(num) {
    let numberDigits = String(num).length;
    // call rotateRightmostDigits using a count of num.length
    // call it using a count of num.length - 1
    // repeat while i >= 2
    for (let i = numberDigits; i >= 2; i -= 1) {
      num = rotateRightmostDigits(num, i);
    }

    return num;

  }

console.log(maxRotation(8703529146))

//735291 => 352917 0
//352917 => 329175 1
//329175 => 321759 2
//321759 => 321597 3
//321597 => 321579 4