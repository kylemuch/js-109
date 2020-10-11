//input: word to find in string of text, string of text (both strings)
//output: formatted string of text highlighting and uppercasing the search word
//Algorithm
  //convert the string to an array of words
  //iterate over the array, if there is a match then return a formatted string.
  //convert the array of words back into a string and return it.

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

function searchWord(word, text) {
  let textArr = text.split(" ");

  let formattedText = textArr.map(el => {
    if (el.toLowerCase() === word.toLowerCase()) {
      return `**${el.toUpperCase()}**`
    } else {
      return el;
    }
  })

  return formattedText.join(" ")
}

console.log(searchWord('sed', text));