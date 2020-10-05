//write a function that takes two arguments

//if exactly one of the arguments is truthy return true, otherwise return false.

//test if arg1 is truthy if so, test if arg2 is truthy. If it is return false.
//test if arg2 is truthy, if not, test if arg2 is truthy. If it is return true.
//if arg2 is falsy, test if arg2 is falsy. if so, return true.

function xor(arg1, arg2) {
  return !!(arg1 && !arg2 || !arg1 && arg2);

  //we're using a short circuit operator here, if either of these conditionals are true then we short circuit the operation and return the argument passed int.
  // we want to return a boolean though so using !! coerces a value into it's boolean equivalent.
  // using ! would return the opposite of the result of the conditional which is not what we want, using !! coerces it to a boolean and then back to the boolean that the conditional returns.
  //arg1 is truthy and arg2 is truthy return false
}

console.log(xor(0, 1));