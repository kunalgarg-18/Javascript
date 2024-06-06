let myDate = new Date()
// console.log(myDate.toString()); // Thu Jun 06 2024 05:06:56 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Thu Jun 06 2024
// console.log(myDate.toISOString()); //2024-06-06T05:06:56.688Z
// console.log(myDate.toJSON())//2024-06-06T05:06:56.688Z
// console.log(myDate.toLocaleDateString());// 6/6/2024
// console.log(myDate.toLocaleString()); // 6/6/2024, 5:06:56 AM

// console.log(typeof myDate); // object

let myCreatedDate = new Date(2024,1,23) // Fri Feb 23 2024 
// Month starts from 0 in JS
// console.log(myCreatedDate.toDateString());

let newDate = new Date(2028,1,29)
// console.log(newDate.toLocaleDateString())

let myTimeStamp = Date.now() 
console.log(myTimeStamp); // returns milliseconds from 01/01/1970 to current date
console.log(myCreatedDate.getTime());

newDate.toLocaleString('default', {
    weekday: "long"
})
console.log(newDate.toLocaleString());