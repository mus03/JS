// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.
// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];
// Output:
// [12, 98, 76, 46]

const numbers = [12, 98, 5, 41, 23, 78, 46];

//---------------------first method-------------------------
const result = [];
for (number of numbers) {
  if (number % 2 === 0) {
    result.push(number);
  }
}
console.log(result);

//---------------------2nd method-------------------------
// const result = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     // result.push(numbers[i]);
//     result.unshift(numbers[i]);
//   }
// }
// console.log(result);
//--------------------------3rd method--------------------------------
// const result = [];
// let i = 0;
// while (i < numbers.length) {
//   if (numbers[i] % 2 === 0) {
//     result.push(numbers[i]);
//   }
//   i++;
// }
// console.log(result);
