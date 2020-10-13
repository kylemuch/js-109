let memo = {};

function fibonacci(int) {
  if (int <= 2) {
    return 1;
  } else if (memo[int]){
    return memo[int];
  } else {
    memo[int] = fibonacci(int - 1) + fibonacci(int - 2);
    return memo[int];
  }
}

console.log(fibonacci(40))