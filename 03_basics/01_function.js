
function sayMyName(){
    console.log("K");
    console.log("U");
    console.log("N");
    console.log("A");
    console.log("L");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2); // It just prints addition of two numbers, but doesn't return it.
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("kunal"))
// console.log(loginUserMessage("kunal"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) // val1 : 200, val2 = 400, rest all values will be assigned to num1 as num1 will be an array of remaining values
// So, num1 : [500,2000]

const user = {
    username: "kunal",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));