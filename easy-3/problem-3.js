function stringy (int) {
  let numString = "10".repeat(int/2);
  if (int % 2 === 1) numString += "1";

  return numString;
}

console.log(stringy(9));