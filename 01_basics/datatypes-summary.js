//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "kunal",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);


/* ************Stack and Heap Memory  *********/

//Stack is used for primitive , Heap (Non Primitive)

let myName = "KunalGarg"
let anotherName = myName
anotherName = "ChiragGarg"

// console.log(anotherName); //ChiragGarg
// console.log(myName); //KunalGarg

//This happened because in anotherName, a copy of myName is sent and the change happened in that copy only and not on the original myName

let userOne = {
    email: "one@google.go",
    id : "one"
}
let userTwo = userOne
userTwo.email = "two@google.com"

console.log(userOne.email); //two@google.com
console.log(userTwo.email); //two@google.com

//Both are same because, userOne is an object (Non Primitive Datatype), so it is passed by reference. Both userOne and userTwo are pointing at same object in the heap memory. All the changes are done in original datatype. 