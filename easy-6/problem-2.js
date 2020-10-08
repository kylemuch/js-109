function doubleConsonants(string) {
  let stringArr = string.split("");
  let vowelArr = ['a', 'e', 'i', 'o', 'u'];

  let doubledArr = stringArr.map(el => {
    if (!vowelArr.includes(el) && letterChecker(el)) {
      return el + el;
    } else {
      return el;
    }
  })

  return doubledArr.join("");
}

function letterChecker (char) {
  char = char.toLowerCase();
  return (char >= 'a' && char <= 'z');
}

console.log(doubleConsonants('Hello-World!'));