//write a function that takes two arguments

//if exactly one of the arguments is truthy return true, otherwise return false.

//test if arg1 is truthy if so, test if arg2 is truthy. If it is return false.
//test if arg2 is truthy, if not, test if arg2 is truthy. If it is return true.
//if arg2 is falsy, test if arg2 is falsy. if so, return true.

function xor(arg1, arg2) {
  if (arg1) {
    if (arg2) {
      return false;
    } else {
      return true;
    }
  } else if (arg2) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(0, 0));