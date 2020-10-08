//input: string
//output: string

function repeater(string) {
  let repeatString = "";

  for (let i = 0; i < string.length; i += 1) {
    repeatString += string[i].repeat(2);
  }

  return repeatString;
}

console.log(repeater('Good Job!'));