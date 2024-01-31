// ### Task-4

// Count the `number of properties`.

// **Input:**
// <br>
// ```js
// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };
// ```
// **Output:**

// <br>

//     4

// ---

let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};
const numberOfKeys = Object.keys(student); //returns array
console.log(numberOfKeys);
console.log(numberOfKeys.length);
const numberOfValues = Object.values(student); //returns array
console.log(numberOfValues);
console.log(numberOfValues.length);
