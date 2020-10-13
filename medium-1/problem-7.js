//input: integer
//output: integer

//we need to find the nth fibonacci number

//start at fibA = 1 and fibB = 1 fibonacci = 2
          //fibA = 2 and fibB = 1 fibonacci = 3
          //fibB = fibA fibA = fibonacci fibonacci = fibA + fibB
//each iteration, i goes up one and fibA gets added to fib

function fibonacci(int) {
  let fibonacci;
  let fibOne = 1;
  let fibTwo = 1;

  if (int <= 2) {
    return 1;
  } else {
    for (let i = 3; i <= int; i += 1) {
      fibonacci = fibOne + fibTwo;
      fibTwo = fibOne;
      fibOne = fibonacci;
    }
  }

  return fibonacci;
}

console.log(fibonacci(20));