// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.
// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// Output:
// ['orange', 'yellow', 'green', 'blue', 'red']

const colors = ["red", "blue", "green", "yellow", "orange"];
//--------------------------------reverse() method--------------------------------------------
// colors.reverse();
console.log(colors);
//-----------------------------------------first method---------------------------------------
// const reverseArray = [];
// for (const color of colors) {
//   reverseArray.unshift(color);
// }
// console.log(reverseArray);
//--------------------------------------second method--------------------------------------------
// const reverseArray = [];
// for (i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
//   reverseArray.unshift(colors[i]);
// }
// console.log(reverseArray);
//--------------------------------------third method--------------------------------------------
const reverseArray = [];
for (i = colors.length - 1; i >= 0; i--) {
  console.log(colors[i]);
  reverseArray.push(colors[i]);
}
console.log(reverseArray);
