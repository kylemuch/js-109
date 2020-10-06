function isPalindrome(string) {
  let reverseString = string.slice().split("").reverse().join("");

  return string === reverseString;

}

function isRealPalindrome (string) {
  let sanitizedString = "";
  let lowercasedString = string.toLowerCase();

  for (let i = 0; i < lowercasedString.length; i += 1) {
    let char = lowercasedString[i];

    if (char >= 'a' && char <= 'z') {
      sanitizedString += char;
    }
  }

  return isPalindrome(sanitizedString);
}

console.log(isRealPalindrome("356a653"));