//Create a function that takes 2 arguments, an array and an object.The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.

//create a function that takes an array and an object as arguments
function greeter(arr, obj) {
  let name = makeName(arr);
  let title = obj.title;
  let occupation = obj.occupation;

  return `Greetings ${name}! Nice to have a ${title} ${occupation} around.`
}

function makeName(arr) {
  let nameString = "";

  arr.forEach(el => nameString += el + " ");

  return nameString.trim();
}

let nameArr = ['Kyle', 'K', 'Much'];
let jobObj = { title: "Junior", occupation: "Janitor" }

console.log(greeter(nameArr, jobObj));

//array will consist of a two element array that will produce a person's name.

//object will have 2 keys, title and occupation and the appropriate values.

//return value will be a greeting string that uses the person's full name, and mentions the person's title.

