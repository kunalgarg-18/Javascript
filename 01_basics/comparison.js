// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); => true
// console.log("02" > 1); => true

/*
This is true because JS automatically converts it to suitable datatype.
*/

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

/*
Equality and Comparison operator works differently internally in JS
Comparison operator converts null to zero
Equality operator doesn't do that
*/

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// === //Strict checking -> Checks data as well as datatype.

console.log("2" === 2); //false