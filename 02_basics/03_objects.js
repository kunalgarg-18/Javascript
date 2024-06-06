//Below are object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Kunal",
    "full name": "Kunal Garg",
    [mySym] : "mykey1", //This mySym is not a symbol here, to make it a Symbol we need to encapsulate it in square brackets
    age: 22,
    email: "kunal@google.com",
    location: "Delhi",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
} // this is an object, this method doesn't build singleton

// console.log(JsUser.email)
// console.log(JsUser["email"]);//These are the methods to call a key of object
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) 

// console.log(JsUser);
/*Output of above object*/
// {
//     name: 'Kunal',
//     'full name': 'Kunal Garg',
//     age: 22,
//     email: 'kunal@google.com',
//     location: 'Delhi',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'mykey1'
//   }

JsUser.email = "kunal@apple.com"
// Object.freeze(JsUser) // This locks the object now we can't change anything in the object
console.log(JsUser.email) // -> kunal@apple.com
JsUser.email = "kunal@openai.com"
console.log(JsUser.email) // -> kunal@apple.com

JsUser.greeting = function(){
    console.log("Hello JS User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greeting); // -> [Function (anonymous)] : This means that it is not executing the function, it just gives us a sense that function is there.
console.log(JsUser.greeting()); // -> Hello JS User : This executes the function.
console.log(JsUser.greetingTwo())