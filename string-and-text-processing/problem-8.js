//input: string
//output: array

//Algorithm
  // Create an empty array to store the strings, or to return if the function is called without an argument or an empty string.
  // if the string has a length > 0 then we iterate split the string into an array
  // loop through the array, and for each element we add the element (string) with a space and the length of the string to the new array.
  // We can use .map for this since we are transforming and returning a new array.
  //We'll return the appropriate string for each loop and then return the array.


  function wordLengths(string) {
    let strArr = [];

    if (!string.length) return strArr;

    strArr = string.split(" ").map(el => { return `${el} ${el.length}`});

    return strArr;
  }

  console.log(wordLengths('cow sheep chicken'));