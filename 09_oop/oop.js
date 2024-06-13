const user = {
    username: 'kunal',
    logInCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got details from database")
        // console.log(`Username: ${this.username}`)
        console.log(this)
    }

}
// user.getUserDetails()
// console.log(user.username);

// const promiseOne = new Promise() // new keyword is constructor function

function User(username, logInCount, isLoggedIn){
    this.username = username
    this.logInCount = logInCount;
    this.isLoggedIn = isLoggedIn

    return this // writing return this is not mandatory it will give same result.
}

const userOne = new User("Kunal", 23, true)
const userTwo = new User("Gary", 32, false)

console.log(userOne); // If we don't use new keyword, userTwo arguments will overwrite userOne arguments.
console.log(userTwo);
console.log(userOne.constructor) // Returns a reference to the same function.

//new keyword creates a new object
//constructor function is called due to new keyword
// this keyword injects all the arguments written 