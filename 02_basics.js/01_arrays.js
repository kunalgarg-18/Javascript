// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]); => 1

// Array methods

// myArr.push(6) => push element at the end of the array
// myArr.push(7)
// myArr.pop() => deletes the last element of the array

// myArr.unshift(9) => adds 9 to the start of the array.
// myArr.shift() => deletes first element of the array

// console.log(myArr.includes(9)); => return true/false if array has 9 or not.
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() => Converts array to comma separated string

// console.log(myArr); [1,2,3,4,5]
// console.log(typeof newArr); //1,2,3,4,5 (String) 


// slice, splice

console.log("A ", myArr); //original array: [0,1,2,3,4,5]

const myn1 = myArr.slice(1, 3) // Returns array from index 1 to index 2 (3 is exclusive). It doesn't affect original array.

console.log(myn1);
console.log("B ", myArr); // [0,1,2,3,4,5]


const myn2 = myArr.splice(1, 3) // Returns array from index 1 to 3 both inclusive => [1,2,3]
console.log("C ", myArr); //[0,4,5] => Splice function manipulates the original array, it removes array from index 1 to 3 from original array.
console.log(myn2);