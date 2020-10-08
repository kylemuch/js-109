function reverse(arr) {

  for (let i = 0; i < arr.length; i += 1) {
    let lastEl = arr.pop();
    arr.splice(i, 0, lastEl);

  }

  return arr;
}

let tempArr = [1, 2, 3, 4, 5];
console.log(reverse(tempArr) === tempArr);


// console.log(tempArr.unshift(tempArr.pop()));
// console.log(tempArr);
