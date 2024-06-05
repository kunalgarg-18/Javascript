const name = "kunal"
const repoCount = 10

// console.log(name + repoCount + " Value"); //bad way of printing the string

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //This is a better way

const gameName = new String('kunal-kg-com')

// console.log(gameName[0]); => k
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 4) //Includes 0 but not 4
console.log(newString);

const anotherString = gameName.slice(-8, 4) // '-' index starts from reverse direction
console.log(anotherString);

const newStringOne = "   kunal    "
console.log(newStringOne);
console.log(newStringOne.trim()); //Trims leading and ending spaces

const url = "https://kunal.com/kunal%20garg"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));