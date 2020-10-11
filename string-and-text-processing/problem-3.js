//input: string
//output: object with three properties

//Example:
  //'Hi There!' => { lowercase: 5, uppercase: 2, neither: 2}


  //create the object with the 3 needed properties
  //convert and store the string into an array of characters.
  //iterate through each character. check if it is a letter
  //if it is a letter, check if it is lowercase
  //increment the proper kvp based on the result
  //return the object

  function letterCaseCount(string) {
    let caseObj = {
      lowercase: 0,
      uppercase: 0,
      neither: 0
    }

    let strArr = string.split("");

    strArr.forEach(char => {
      if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
        char.toLowerCase() === char ? caseObj.lowercase += 1 : caseObj.uppercase += 1;
      } else {
        caseObj.neither += 1;
      }
    })

    return caseObj;
  }

  console.log(letterCaseCount(''));