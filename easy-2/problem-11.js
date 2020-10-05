// input: integer
// output: string


// we'll need an object with the digits 0 - 9 as keys and string values of the same digits as their value.

//take the integer and divide it by 10, the remainder (modulo) of this will be our ones digit.
// 455 % 10 = 5
// int = (455 - 5) / 10
// int = 45

//add this number to our intString we build as we work through the number. If the value we are using to divide the argument every becomes bigger than the argument, we stop.

//the string will need to be reversed and then we can return the string.

function integerToString(int) {
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

console.log(integerToString(378));