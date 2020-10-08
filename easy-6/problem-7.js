function swapName(string) {
  let strArr = string.split(" ");

  return `${strArr[1]}, ${strArr[0]}`;
}

console.log(swapName('Kyle Much'));