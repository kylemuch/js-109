//we need to find each substring within a string and check if we could create the string by repeating a sub pattern of the string multiple times.

//we'll need to loop through the string and make a substring using the string index, then we'll add the string to itself repeatedly until the length of the substring is equal to the length of the string. Then we will check for equality.

// const Repeated_Substring_Pattern = (string) => {
//   let substring = "";
//   let maxIndex = Math.floor(string.length / 2);

//   for (let i = 0 ; i < maxIndex ; i += 1) {
//     substring = string.slice(0, i + 1);

//     while (substring.length < string.length) {
//       substring += string.slice(0, i + 1);
//     }
//     console.log(substring);

//     if (substring === string) {
//       return true;
//     }
//   }


//   return false;
// }

// console.log(Repeated_Substring_Pattern('abaababaababaab'));

//In Watch and Code, video 2 there is an error in the solution for the first problem (repeatedSubstringPattern). The code works if there are an even amount of substrings to match within the string passed as an argument because of an error on line 21 in the code. The line is substring += substring, but this causes the substring to grow too quickly, instead it should be substring += string.slice(0, i + 1); The code in the video passes all the tests but they all happen to have an even amount of substrings in them. I was passing my own args in to check edge cases and it was driving me crazy. Thanks!

//Given an array of strings made only from lowercase letters, return an array of all characters that show up in all strings within the given array including duplicates.

//We should just be able to test the first string, if all of it's characters are present in all of the other strings the other strings won't be either.

function charInAllStrings(arr, char) {
  return arr.every(string => string.indexOf(char) > -1);
  // fucked up using arr.every, -1 is not a falsy value so it couldn't tell me if the char was present in all strings.
}

function removeCharFromAllString(arr, char) {

  for (let i = 0; i < arr.length; i += 1) {
    let idxToRemove = arr[i].indexOf(char);
    // console.log(`index to remove: ${idxToRemove}`);
    let el = arr[i];
    arr[i] = el.substring(0, idxToRemove) + el.substring(idxToRemove + 1);
    //when i used el to reference arr[i], i was assigning it the value of the string, on line 45 I was trying to assign the value of the new string to a primitive value (the old string). If you assign a reference to an array element it will be the value of the element, you cannot reassign the array element without explicitly referencing the index you want to reassign.
    console.log(el);
  }

  return arr;
}

const commonChars = (arrOfStrings) => {
  let commonChars = [];
  let firstEl = arrOfStrings[0];

  for (let i = 0; i < firstEl.length; i++) {
    let char = firstEl[i];
    // console.log(char);

    if (charInAllStrings(arrOfStrings, char)) {
      commonChars.push(char);
      removeCharFromAllString(arrOfStrings, char);
    }
  }
  return commonChars;
}

let testArr = ['b', 'a', 'rdddrk'];

// console.log(charInAllStrings(testArr, 'b'));
// console.log(removeCharFromAllString(testArr, 'b'));
console.log(commonChars(testArr));








