function reverseString(string) {
  return string.split("").reverse().join("");
}

function reverseWords(string) {
  let reversedString = "";

  string.split(" ").forEach(el => {
    if (el.length <= 4) {
      reversedString += el + " ";
    } else {
      reversedString += reverseString(el) + " ";
    }
  })

  return reversedString;
}

console.log(reverseWords('Launch School'));
