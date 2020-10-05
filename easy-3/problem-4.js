// input: integer
// output: integer

// find the first number in the fibonacci sequence at which the number of digits that make up the number is equal to the integer passed in to the function.


//write a function that take an integer.

//we need to store 3 values, the current and 2 previous fibonacci numbers. Initially they will both be one.

//we then need to start a loop that adds the previous 2 numbers togther and stores them as the current fibonacci number, then fib - 2 num would disappear, fib - 1 would move down

function findFibonacciIndexByLength(int) {
  let num1 = 0;
  let num2 = 1;
  let fibonacci = 1;

  let index = 2

  while (String(fibonacci).length < int) {
    console.log(fibonacci);
    num1 = num2;
    num2 = fibonacci;
    fibonacci = num1 + num2;
    index += 1;
  }

  return index;
}

console.log(findFibonacciIndexByLength(16));
