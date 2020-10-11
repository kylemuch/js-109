//input: string
//output: string
//algorithm:
  //convert the string to an array of characters
  //loop through the array and convert every character with an even index to uppercase. Make sure every element at an odd index is lowercase.
  //convert the array to a string
  //return the string.


function staggeredCase(string) {
  let strArr = string.split("");

  let formattedArr = strArr.map((el, i) => {
    if (i % 2 === 0) {
      return el.toUpperCase();
    } else {
      return el.toLowerCase();
    }
  })

  formattedArr = formattedArr.join("");

  return formattedArr;
}

console.log(staggeredCase('I Love Launch School!'));