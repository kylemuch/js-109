//loop through the array and for each array, push arr 0 into a new arr arr 1 times

function buyFruit(arr) {
  let fruitArr = [];

  arr.forEach(arr => {
    for (let i = 0; i < arr[1]; i += 1) {
      fruitArr.push(arr[0]);
    }
  })

  return fruitArr;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));