//Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log("DB CONNECTED")
})(); // We need to put semicolon at the end of IIFE to let it know that it needs to stop, otherwise it will run till infinity.

// Try to understand the syntax of function first () -> It is used to define the function. 2nd () is used to invoke the function. Just like () in chai().

// Sometimes global scope pollutes the function and to remove the variables and function or anything else declared in global scope IIFE are used.

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('kunal')