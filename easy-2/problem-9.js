//our function takes a single string composed of digits
//we need to output the an integer that mimics the string

//we need to create a number object that maps all the digit strings to their numberical value.

//we'll put these digits into an array so that we have an array of each digit in the string.

// we need to then do a little math so that each digit is added to the digit before it and stays in the same place (hundreds/tens/ones)

// we'll accumulate the value as we iterate through the loop and then return that value after we iterate through the entire array.

function stringToInteger (str) {
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

console.log(stringToInteger("294857"));