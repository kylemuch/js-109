// Log all even numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

// for (let number = 2; number < 99; number += 2) {
//   console.log(number);
// }


for (let number = 1; number < 99; number += 1) {
  if (number % 2 === 1) continue;
  
  console.log(number);
}
