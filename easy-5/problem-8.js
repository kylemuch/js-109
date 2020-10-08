//input: array
//output: log the element and times it occurs in the array. case sensitive.

//create an empty object

//loop through the array and check if the element is a key name in the object. If it is, add 1 to the value of the key. If it is not, set the value to 1.

//using a for in loop, loop through the object and log the key and value for each pair.

function countOccurences(vehicles) {
  let counterObj = {};

  vehicles.forEach(el => counterObj[el] ? counterObj[el] += 1 : counterObj[el] = 1)

  for (vehicle in counterObj) {
    console.log(`${vehicle} => ${counterObj[vehicle]}` );
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurences(vehicles);
