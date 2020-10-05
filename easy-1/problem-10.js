//Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

//You may assume that the number passed in is an integer greater than 1

//input: integer greater than 1
// output: integer
// starting at 1, check if a number is a multiple of 3 or 5
// if true, add that number to our accumulator variable we need to create
// if false, move to the next iteration of the loop.
// Once the index of the loop is greater than the argument passed in, stop looping.
// return the accumulator variable.

function multisum(num) {
  let accumulator = 0;

  for (let i = 1; i <= num; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      accumulator += i;
    }
  }
  return accumulator;
}



console.log(multisum(3) === 3);
console.log(multisum(5) === 8);
console.log(multisum(10) === 33);
console.log(multisum(1000) === 234168);
