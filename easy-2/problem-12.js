//  input: integer (- / +)
//  output: string version of the integer with the proper sign preceding it
//  algorithm:
      // check if the integer is positive or negative and store that value
      // convert the integer to a string using the previous integerToString method
      // handle 0 (unsigned)
      // prepend the proper + / - sign to the string
      // return the string.

function integerToString(int) {
  int = Math.abs(int);

  const DIGIT_OBJ = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9'
  }

  let intString = "";

  while (int > 0) {
    let lastDigit = int % 10;
    intString += DIGIT_OBJ[lastDigit];
    int = (int - lastDigit) / 10;
  }

  return intString.split("").reverse().join("");
}

// function signedIntegerToString(int) {
//   let isPositive = true;
//   if (int < 0) {
//     isPositive = false;
//   }

//   let intString = Math.abs(int);

//   if (intString === "0") {
//     return "0"
//   } else if (isPositive) {
//     return intString;
//   } else {
//     return "-" + intString;
//   }
// }

function signedIntegerToString(int) {
  switch (Math.sign(int)) {
    case -1:
      return `-${integerToString(-int)}`;
    case 1:
      return `${integerToString(int)}`;
    default:
      return integerToString(int)
  }
}


console.log(signedIntegerToString(-974))