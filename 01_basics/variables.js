const accountId = 14453
let accountEmail = "kunal@gmail.com"
var accountPassword = "12345" // Never use it
accountCity = "Jaipur" // This is the worst way
let accountState;

// accountId = 3 //Not allowed


accountEmail = "kg@kg.com"
accountPassword = "212121"
accountCity = "Bengaluru"
console.log(accountId);

/* 
Prefer not using var to avoid block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])