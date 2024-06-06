// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc" //That's how we can declare more properties in objects.
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "kunal",
            lastname: "garg"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // -> This will insert an an obj1 as one object and obj2 as another object inside an object obj3.
// const obj3 = Object.assign({}, obj1, obj2, obj4) // -> This will return elements of all sources which are obj1,obj2,obj4 combined as one object in target which is an empty object. 

const obj3 = {...obj1, ...obj2} // This is spread operator, it will combine all elements of obj1 & obj2 as one object in obj3.
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // -> It will make an array of all the keys from the object
// console.log(Object.values(tinderUser)); // -> It will make an array of all the values from the object
// console.log(Object.entries(tinderUser)); // -> It will make an array of all the key value pairs also as an array from the object

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true : 
// console.log(tinderUser.hasOwnProperty('isLogged')); //false

const course = {
    coursename: "all about js",
    price: "999",
    courseLearner: "kunal"
}

// course.courseLearner // This syntax is perfectly fine, there is no issue with this. But there is a better way of doing the same stuff.

//Object Destructuring
const {courseLearner : learner} = course

// console.log(courseLearner); 
// console.log(learner);

// {
//     "name": "kunal",
//     "coursename": "js in hindi",
//     "price": "free"
// } This is json format, usually we get api data in this format. 

[
    {},
    {},
    {}
] // Sometimes we get data in array form also.