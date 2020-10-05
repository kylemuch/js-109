function logInBox(string) {
  //get the width of the box by adding some padding to the length of the string.
  let boxWidth = string.length + 10;

  let topLine = `+${"-".repeat(boxWidth - 2)}+`
  let midLine = `|${" ".repeat(boxWidth - 2)}|`
  let stringLine = `|${" ".repeat(4)}${string}${ " ".repeat(4)}|`


  console.log(topLine);
  console.log(midLine);
  console.log(stringLine);
  console.log(midLine);
  console.log(topLine);

}


logInBox("Handsome Haberdasher");

logInBox("Peterman Swimwamly stole my knife");