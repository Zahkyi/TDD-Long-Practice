function myMap(inputArray, callback) {
  let newArray = [];
  for (let curVal of inputArray) {
    newArray.push(callback(curVal));
  }
  return newArray
}


// const arr = [1, 2, 3];
// const callback = (el) => el * 2;
// let myCallback = myMap(arr, callback)
// // console.log(myMap(arr, callback)); // prints [2,4,6]
// // console.log(arr); // prints [1,2,3]
// console.log(myCallback);
// console.log(myCallback === [2, 4, 6]);

module.exports = myMap;
