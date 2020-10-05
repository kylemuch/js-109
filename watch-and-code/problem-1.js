// Create a function that takes a positive integer number and returns the next bigger number formed by the same digits.

// console.log(nextBiggerNum(5467) === 5476);
// console.log(nextBiggerNum(233321) === -1);
// console.log(nextBiggerNum(654321) === -1);

// function nextBiggerNum(int) { <=== implemented the wrong solution.
//   let numArr = String(int).split("");
//   let lastTwo = numArr.slice(numArr.length - 2);

//   // [7,6]

//   if (lastTwo[0] === lastTwo[1]) {
//     return -1;
//   } else if (lastTwo[0] > lastTwo[1]) {
//     return -1;
//   } else if (lastTwo[1] === undefined) {
//     return -1;
//   } else {
//     let lastEl = lastTwo.pop();
//     lastTwo.unshift(lastEl);
//     lastTwo = lastTwo.join("");
//     return numArr.slice(0, numArr.length - 2).concat(lastTwo).join("");
//   }
// }

// console.log(nextBiggerNum(123456789));

// console.log([3,4].reverse());
//slow the fuk down. you had uncommented code in your pseudocode, forgot to call the function when you were initially checking it, and hack and slashed your way through the problem. You could have shaved 10 minutes off of this if you slowed down and worked the problem and pseudocoded first. You get 40% of the way there and then just start typing. Take it down a notch and think all the way through the problem 1st.



//We're trying to find the next biggest number that can be formed by the same digits of the positive integer passed as an argument.

//We can iterate by 1 starting from int, and check if all the digits contained in the number are present in int. If the number is bigger than int, and has all the same digits this is the next biggest int.

//We'll start by coding a helper function that allows us to compare two ints to see if they contain all of the same digits.

function compareDigits(intOne, intTwo) {
  //convert each int to an array, sort the array
  let intOneSorted = intOne.toString().split("").sort();
  let intTwoSorted = intTwo.toString().split("").sort();

  //check if the lengths of the arrays are the same.
  if (intOneSorted.length !== intTwoSorted.length) return false;

  //compare the arrays. Will need to loop through the array and compare characters. Since they are sorted and the same length if this will return true if the loop finishes without returning false

  for (let int = 0; int < intOneSorted.length; int += 1) {
    if (intOneSorted[int] !== intTwoSorted[int]) return false;
  }

  return true;
}

let getDigits = int => int.toString().length;

function nextBiggest(int) {
  // get the number of digits in int, we'll use this to know when to stop iterating

  let digits = getDigits(int);

  // starting at i = int, add 1 to i every time until compareDigits returns true of the number of digits in the int we're creating with the loop has more digits than int.

  let i = int;

  while (getDigits(i) <= digits) {
    i += 1;

    if (compareDigits(int, i)) {
      return i;
    }

  }

  return -1;
}

// console.log(nextBiggest(9) === -1);
// console.log(nextBiggest(12) === 21);
// console.log(nextBiggest(513) === 531);
// console.log(nextBiggest(2017) === 2071);
// console.log(nextBiggest(111) === -1);
// console.log(nextBiggest(531) === -1);
// console.log(nextBiggest (123456789) === 123456798);

//be very careful with loops and iteration, you were unclear how you were going to iterate with the while loop. You iterated the argument on accident and performed the conditional backwards as well. You again got ahead of yourself


//Write a function that returns true if a portion of str1 characters can be rearranged to match str2. otherwise return false.

//To compare the two strings, I want to convert them both to an array, and then sort them. If str1 has a substring that matches the characters in string2, we'll return true. If we find a non matching index before we finish iterating through string2, we'll return false.

// function scramble(str1, str2) {
//   let sortedArrOne = str1.split("");
//   let sortedArrTwo = str2.split("");

//   //loop through sortedArrTwo, check if the indexOf the el in sortedArrOne is not -1. If it is not remove the element and continue looping.

//   for (let i = 0; i < sortedArrTwo.length; i += 1) {
//     let index = sortedArrOne.indexOf(sortedArrTwo[i]);

//     if (index !== -1) {
//       sortedArrOne.splice(index, 1);
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

function scramble(str1, str2) {
  let arrOne = str1.split("");
  let arrTwo = str2.split("");

  let i;

  for (i = 0 ; i < arrOne.length; i ++) {
    if (arrTwo.includes(arrOne[i])) {
      let indexToSplice = arrTwo.indexOf(arrOne[i]);
      arrTwo.splice(indexToSplice, 1);
    }
  }

  if (arrTwo.length === 0) {
    return true;
  } else {
    return false;
  }

  // loop through arrOne, if arrTwo does not include the element in the current iteration, go to the next loop. If it does include the element, .pop() the element from arrTwo. if arrTwo is empty after the loop, the string is contained in teh array.
}

console.log(scramble('javaass', 'jjss') === false);
console.log(scramble('rkqodlw', 'world') === true);
console.log(scramble('scriptjava', 'javascript') === true);
console.log(scramble('scriptingjava', 'javascript') === true);
console.log(scramble('katas', 'steak') === false);


