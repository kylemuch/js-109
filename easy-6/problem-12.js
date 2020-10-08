function isBalanced(string) {
  //convert the string into an array
  //loop through the array, for Each "(" there must be a ")" with a higher index.
  let parens = 0;

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === "(") {
      parens += 1;
    } else if (string[i] === ")") {
      parens -= 1
    }
    if (parens < 0) return false;
  }

  return parens === 0;
}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);