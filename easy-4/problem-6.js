function isPalindrome(string) {
  let reverseString = string.slice().split("").reverse().join("");

  return string === reverseString;

}

function isPalindromicNumber(num) {
  return isPalindrome(String(num));
}

console.log(isPalindromicNumber(4334));
