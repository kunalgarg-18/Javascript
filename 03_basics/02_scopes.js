//var c = 300 //This way of declaring is really bad
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a);
    
}



// console.log(a); // -> 300
// console.log(b); // -> b is not defined
// console.log(c); // ->But this will return 30, even though c was only declared inside the loop (which is outside the scope of the global program)
//scope is nothing but {} after for loop, if/else loops.


function one(){
    const username = "kunal"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

one()

if (true) {
    const username = "kunal"
    if (username === "kunal") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5)) //Here, this will work, even though we have called the function before defining it.

function addone(num){
    return num + 1
}



// addTwo(5) // This will not work because we are defining addTwo function in a variable. And we can't call a variable before initializing it.
const addTwo = function(num){
    return num + 2
}