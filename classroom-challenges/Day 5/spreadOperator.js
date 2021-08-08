/*
    - Spread Operator

    - The spread operator pulls out all elements in an array and gives them back to you as a standalone list of elements.
    -It takes in an iterable object and/or object and expands it into individual elements. The spread operatore is typically used to make copie of other array/objects.
    -Denoted by the ellipsis (...)
*/

let students = ["Laura", "Krystle"];
//WRONG SYNTAX
// ...students //["Laura", "Krystle"];

let copiedStudents = [...students]
// the spread operator is good at making a new copy of that array.
// let copiedStudents = [students]; //Output: [["Laura", "Krystle"]]
students.push("Leslie")
console.log(students, copiedStudents)

let persons = [
    {name: "David", age: 20},
    {name: "Taylor", age: 300}
]

let copiedPersons = [...persons]

persons.push({name: "Olivia", age: 25})
console.log(persons, copiedPersons)

//Math
console.log(Math.min(1, 5, -3));
let prices = [10.99, 5.99, 3.99, 6.59]
console.log(Math.min(prices)) //NaN not a number it returns NaN because prices is an array not a number.
console.log(Math.min(...prices)) // Pulls out individual elements (the numbers in this case) and returns standalon elements.

//Concatenates Arrays
let num1 = [1,2,3,4]
let num2 = [5,6,7,8]

let concat = [...num1,...num2]
console.log(concat)

//Pass Arguments
let sentence = ["oh hi Mark", false, 2]

function pass(a, b, c) {
    console.log(a)
    console.log(b)
    console.log(c)
}

pass(...sentence)
// Copy an object
let obj = {a: 1, b: 2, c: 3}
let copyObj = {...obj}

console.log(obj, copyObj)

//Merge Object
let obj1 = {a: 1, b: 2, c: 3}
let obj2 = {d: 4, e: 5, f: 6}

let mergeObj = {...obj1, ...obj2}
console.log(mergeObj);

//Note
let obj1 = {a: "Hello", b: "Mark", c: "!"}
let obj2 = {a: "Goodbye"} //similar keys will replace the former key, but the copy still stays.

let mergeObj = {...obj1, ...obj2}
console.log(mergeObj)

//Error
let obj = {a: 1, b: 2, c: 3}
// let copyObj = [...obj]
copyObj = [obj];

console.log(copyObj)