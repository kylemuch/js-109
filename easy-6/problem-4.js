//if the string is 11 characters long we need the character at index 5
//if the string is 10 character long we need the characters at index 4,5

function centerOf(string) {
  let length = string.length;
  return length % 2 === 0 ? string.slice((length / 2) - 1, (length / 2) + 1) : string[Math.floor(length / 2)];
}

console.log(centerOf('Launchschool'));

//'I Love JavaScript' => 17 (8th index) = length / 2 + 1

012345678