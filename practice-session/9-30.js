// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

//the function needs to find the common characters that an array of strings start with. We need to iterate through the array, and check how many characters the elements have in common.

//since the prefix has to be common among all of the elements, we can use any element as the source to iterate through.

//input: array of strings
//output: string that is the common prefix among all of the strings in the input (array of strings)

//examples:
  // ['large', 'charge'] => ''
  // ['large', 'lard'] => 'la'
  // [] => ''

//create a function that takes an array as an argument
//create a variable that stores an empty string, we'll return that even if there is no common prefix
//create a variable to store the value of the first element in the array, we'll use that to check the prefix of every other element. since every element in the array needs to have the same prefix this could be any element.
//for each character in the first element, check if every character in the array has the same character at that i. if so, add that character to the common prefix string.
//once we find a character that isn't common for every element, return the string we've been concatenating characters to.

function commonPrefix(arr) {
  let commonPrefixString = '';
  let firstValue = arr[0];

  for (let i = 0; i < firstValue.length; i += 1) {
    if (arr.every(el => el[i] === firstValue[i])) {
      commonPrefixString += firstValue[i];
    } else {
      return commonPrefixString;
    }
  }

  return commonPrefixString;
}

//Challenges:
    // I used the length of the array i passed in in the conditional for the loop to run instead of the length of the firstValue.
    // If the commonPrefixString and the string I was checking it against were the same string nothing would return from the function because we would never hit the else block where the conditional returns.

// console.log(commonPrefix(["interspecies", "interstellar", "interstate"]));





// function commonPrefix(arr) {
//   let testString = arr[0];
//   let commonString = "";

//   for (let i = 0; i < testString.length; i += 1) {
//     let prefix = testString.substring(0, i + 1);

//     if (arr.every(el => el.substring(0, i + 1) === prefix)) {
//       commonString = prefix;
//     }
//   }

//   return commonString;
// }

// console.log(commonPrefix(["flower", "flow", "flight"]) === "fl"); // true
// console.log(commonPrefix(["dog", "racecar", "car"]) === ""); // true
// console.log(commonPrefix(["interspecies", "interstellar", "interstate"]) === "inters"); // true
// console.log(commonPrefix(["throne", "dungeon"]) === ""); // true
// console.log(commonPrefix(["throne", "throne"]) === "throne"); // true




// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// I need to find the longest consecutive group of strings within an array of k strings.

//input: array of strings
//output: concatenated array;

//I need to loop through the array and build a string of k consecutive elements for each element.

//I need to move to the next element and build a string of k consecutive elements

//I need to test which string is longer, if one is longer, that becomes the longest string.

//I need to stop iterating at array length - k + 1

function longestConsec(arr, numOfStrings) {
  let longestString = '';
  // store longest string
  let currentString = '';
  // store current string
  if (arr.length === 0 || numOfStrings > arr.length || numOfStrings <= 0) {
    return currentString;
  }
  // loop through the array of strings and select a string to start from
  for (let i = 0; i <= arr.length - numOfStrings; i += 1) {
    currentString += arr[i];
    //add that string to the current string (empty)
    let j;
    for (j = i + 1; j < i + numOfStrings; j += 1) {
      currentString += arr[j];
      //start another loop that begins at the element after the element at i i (i + 1) then add the next k elements to the string (stop at j = i + k)
    }
    if (currentString.length > longestString.length) {
      longestString = currentString;
    }
    currentString = '';
  }
  return longestString;
}

//Challenges:
  // Handle the "Stop right away if...." conditions. They're easy, remember to return the right thing though.
  // Take a minute to think about where you are stopping and starting your loop, that has bitten you a couple of times. You went too long on the outer loop and were getting undefined when you created the last string and you weren't looping enough times on the inner loop because you didn't think through how it would interact with the outer loop.
  //Inner loop is always j, outer loop is always i, stick to those when looping. Name everything else explicitly though.


// console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));





console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true