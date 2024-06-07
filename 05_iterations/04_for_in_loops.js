const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
} // for in loop works perfectly with objects while for of doesn't.

//Now, does for in loops work with arrays as well?
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
} //yes, for in loop does works well with arrays.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
} //-> It will show nothing.
// Maps also is not iterable, so we can't use loops like this on maps.