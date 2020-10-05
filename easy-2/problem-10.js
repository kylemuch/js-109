// function stringToInteger(str) {
//   const DIGIT_OBJ = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9
//   }

//  let isPositive = true;

//   function firstEl(arr) {
//     if (arr[0] === "-") {
//       arr.shift();
//       return false;
//     } else if (arr[0] === "+") {
//       arr.shift();
//     }
//   }

//   let stringArr = str.split("");
//   isPositive = firstEl(stringArr);
//   let digitArr = stringArr.map(el => DIGIT_OBJ[el]);

//   let value = 0;

//   if (isPositive) {
//     digitArr.forEach(el => value = (value * 10) + el);
//   } else {
//     digitArr.forEach(el => value = (value * 10) - el);
//   }

//   return value;
// }

function stringToInteger(str) {
  const DIGIT_OBJ = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  }

  let stringArr = str.split("");

  let digitArr = stringArr.map(el => DIGIT_OBJ[el]);

  let value = 0;

  digitArr.forEach(el => value = (value * 10) + el);

  return value;
}

function stringToSignedInteger(string) {
  switch(string[0]) {
    case "-":
      return -stringToInteger(string.slice(1));
    case "+":
      return stringToInteger(string.slice(1));
    default:
      return stringToInteger(string);
  }
}

console.log(stringToSignedInteger("4938527"))