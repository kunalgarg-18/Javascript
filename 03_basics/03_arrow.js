const user = {
    username: "kunal",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); //If we don't use this keyword then, username will be undefined for this welcomeMessage function. This keyword provides a context to the username.
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage()
// console.log(this); //It shows a very different output on node environment and web engine. Shows empty curly braces in node environment and returns window function in web engine.
// function chai(){
//     let username = "kunal"
//     console.log(this.username); //-> undefined. This keyword works only in objects and not in functions.
//     console.log(this) // -> This has returned some values that means something is inside this for sure.
// }
// chai()


/*****************Arrow Functions***************** */


// const chai = () => {
//     let username = "kunal"
//     console.log(this.username)  //Same as above
//     console.log(this) //-> {} Doesn't really work with arrow functions.
// }
// chai()


/*One way of declaring arrow functions*/


// const addTwo = (num1, num2) => {
//     return num1+num2
// }

/** Another way (Implicit function) */

// const addTwo = (num1, num2) => (num1+num2)
// Notice that we haven't used return statement here, when we use {}, return keyword is must. Otherwise, its not required.
const two = (num1, num2) => ({first :num2, second: num1})
