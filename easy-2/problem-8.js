let oddities = (arr) => {
  return arr.filter((_arr, i) => i % 2 === 1);
}

let myArr = [1,2,3,4,5,6,7];

console.log(oddities(myArr));


