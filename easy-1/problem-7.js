function shortLongShort(stringOne, stringTwo) {
  let longerString = stringOne.length > stringTwo.length ? stringOne : stringTwo;

  if (longerString === stringOne) {
    return stringTwo + stringOne + stringTwo;
  } else {
    return stringOne + stringTwo + stringOne;
  }
}

console.log(shortLongShort('hottest', 'dog'));



