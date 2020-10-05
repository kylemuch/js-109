//input string
// output string

//collapse all duplicate characters into a single character within the string.

//loop through each character in the string and if it's not a duplicate of the last chatacter in the accumlating string add it. If it is a double then skip it.

function crunch(string) {
  let noDupes = "";

  for (let i = 0; i < string.length; i += 1) {
    if (noDupes.length === 0) {
      noDupes = string[0];
    } else if (string[i] !== noDupes[noDupes.length - 1]){
      noDupes += string[i]
    };
  }

  console.log(noDupes);
}

crunch('ggggggggggggggg')
