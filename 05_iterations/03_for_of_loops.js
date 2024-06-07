// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") //Maps takes only unique values.


// console.log(map);

for (const key of map) {
    // console.log(key);
} //This will print the whole map, to get just keys we need to do this.

for (const [key] of map) {
    // console.log(key);
}//Encapsulate the key variable in square brackets to get only keys.
for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`);
}
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);    
}// -> myObject is not iterable, for of loops doesn't work on objects.