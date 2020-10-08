//input : string
// output : integer < 1440

//write two function that calculate either the minutes after midnight or before midnight.

//to get the minutes before midnight, we need to return the argument in minutes - minutes in a day.

//to get the minutes after midnight, we need to convert the string to minutes.

function afterMidnight(timeString) {
  let hours = parseInt(timeString.split(":")[0]);
  let minutes = parseInt(timeString.split(":")[1]);

  if (hours === 0 && minutes === 0 || hours === 24) {
    return 0;
  } else {
    return (hours * 60) + minutes;
  }
}

function beforeMidnight(timeString) {
  let hours = parseInt(timeString.split(":")[0]);
  let minutes = parseInt(timeString.split(":")[1]);

  if (hours === 0 && minutes === 0 || hours === 24) {
    return 0;
  } else {
    return 1440 - ((hours * 60) + minutes);
  }
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
