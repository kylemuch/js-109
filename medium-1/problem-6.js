//the fibonacci sequence is a sequence of numbers in which each number is the sum of the previous two numbers.


//1,1,2,3,5,8 => first 6 fibonacci numbers
// we call the function with which number we want from the sequence so
// fibonacci(6) would return 8.
//

function fibonacci(int) {
  if (int <= 2) {
    return 1;
  } else {
    return fibonacci(int - 1) + fibonacci(int - 2);
  }
}

console.log(fibonacci(40))