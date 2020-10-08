//Write a function that inputs a year and returns a century
//input: int
//output: string

//The suffix for the year must be correct, they will be:
  //'st', 'nd', 'rd', or 'th'
//New centuries bgin in years that end with 01.
// 1901 - 2000 is the 20th century
// 0 - 100 is the 1st century
// 101 - 200 is the 2nd century

//we need to first get the century, to that we divide the year by
//by 100.
// Ex: 565 / 100 = 5
// If there is a remainder when dividing by 100 we then add 1 to
// to get the sixthe century
// we then append the correct suffix based on the year

function century (year) {
  let century = Math.floor(year / 100);

  if (year === 0 || year % 100 !== 0) {
    century += 1;
  }

  return century + returnSuffix(century);
}

function returnSuffix (century) {
  let lastDigit;
  let suffix = "";

  if (century === 11 || century  === 12 || century === 13) {
    suffix = "th";
    return suffix;
  }

  lastDigit = century % 10;

  switch(century) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}


console.log(century(565));
console.log(century(0));
console.log(century(101));
console.log(century(11201));
