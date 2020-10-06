function isPalindrome(string) {
  let reverseString = string.slice().split("").reverse().join("");

  return string === reverseString;

}

console.log(isPalindrome('356653'));