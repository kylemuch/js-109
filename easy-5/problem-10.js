//input: integer
//output: string representing hours and minutes.
// if the number of minutes is positive, the time is after midnight.
// if the number minutes is negative, the time is before midnight


let minutesInDay = 24 * 60;

// we need to get remove the days from the number of minutes.
//If the minutes is negative we need to subtract it from 1440.

//If the minutes are positive we just need to convert it to an hours and minutes string

//we get the hours by dividing the minutes by minutesInDay and rounding, and get the minutes by getting the modulo of 60.
const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_IN_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function timeofDay(int) {
  let minutes = int % MINUTES_IN_DAY;

  minutes < 0 ? minutes = minutes + MINUTES_IN_DAY : null;


  let hours = Math.floor(minutes / MINUTES_PER_HOUR);
  hours < 10 ? hours = "0" + hours : null;
  minutes = minutes % MINUTES_PER_HOUR;
  minutes < 10 ? minutes = "0" + minutes : null;

  return `${hours}:${minutes}`;
}

console.log(timeofDay(-4231));


