// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.
// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// Output:
// 'TomTimTinTik'
var numbers = ["Tom", "Tim", "Tin", "Tik"];
console.log(numbers);
let result = "";
for (const number of numbers) {
  console.log(number);
  result = result.concat(number); //string added to an empty array and store the strings in that empty array
}
console.log(result); //[ 'Tom', 'Tim', 'Tin', 'Tik' ] (array)
// console.log(result.join("")); // TomTimTinTik (string)

// --------------------------------------------------------------------------------
// var numbers = ["Tom", "Tim", "Tin", "Tik"];
// console.log(numbers);
// let result = [];
// for (const number of numbers) {
//   console.log(number);
//     let a = number.split(" "); //making a string an array
//     console.log(a);
//   result = result.concat(a);
// }
// console.log(result.join(""));
