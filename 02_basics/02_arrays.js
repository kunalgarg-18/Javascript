const marvel = ["thor", "IronMan", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel.push(dc) // It pushes whole dc array inside the marvel array as one element
// console.log(marvel)
// console.log(marvel.length)

// const heros = marvel.concat(dc) // concatenates two arrays elements.
// console.log(heros);

const all_heros = [...marvel, ...dc] // This is called spread operaor. It concatenates two arrays. It is an industrial standard to use this method.
// console.log(all_heros);

const arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_arr = arr.flat(Infinity) // It flattens the array with the written depth, Infinity flattens the whole array till highest depth.
// console.log(real_arr);

// console.log(Array.isArray("Kunal")) // Since this is a string
// console.log(Array.from("Kunal"))
// console.log(Array.from({name: "kunal"})); //Since, this is an object JS can't convert it to array. That's why it returned empty array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // Makes an array of listed elements