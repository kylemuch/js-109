// Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absoulte value is odd. You may assume that the argument is a valid integer.

function isItOdd(int) {
  return Math.abs(int) % 2 === 1;
}

isItOdd(-17);
isItOdd(0);
isItOdd(8);

// I didn't think about what a negative number would need to be equal to.
// I didn't return anything, I just logged it. I would have failed this for lack of attention to detail.