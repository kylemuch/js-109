function staggeredCase(string) {
  let strArr = string.split("");

  let formattedArr = strArr.map((el, i) => {
    if (isAlphabetic(el)) {
      if (i % 2 === 0) {
        return el.toUpperCase();
      } else {
        return el.toLowerCase();
      }
    } else {
      return el;
    }
  })

  formattedArr = formattedArr.join("");

  return formattedArr;
}

function isAlphabetic(char) {
  return (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z');
}

console.log(staggeredCase("ignore 77 the 444 numbers"));