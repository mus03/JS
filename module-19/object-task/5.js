// ### Task-5 (Hard)
// Loop through an object and print the key-value pairs with their `types`
// **Input:**
// <br>
// let myObject = {
//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
// };
// **Output:**j
// <br>
//     key: name | type:  string
//     key: age | type:  number
//     key: city | type:  string
//     key: isStudent | type:  boolean
let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};
for (const keys in myObject) {
  console.log("key: ", keys, "| type: ", typeof myObject[keys]);
  //   console.log(myObject[keys]); //
}

// var a = 1; //number
// var name = "dipro"; //string
// var marrried = false; //boolean
// var x = null; //object
// let x = [1, 2, 3, 4, 5];
// console.log(x);
// console.log(typeof x);
// let fruits = ["mango", "apple", "orange"];
// console.log(fruits);
// console.log(typeof fruits);
// let student = {
//   name: "abc",
//   age: 10,
//   isGood: true,
// };
// console.log(student);
// console.log(typeof student);
