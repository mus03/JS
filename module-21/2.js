// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2
// sample-input:
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0

function count(numb, find) {
  let newArr = [];
  for (const n of numb) {
    // console.log(n);
    if (n === find) {
      newArr.push(n);
    }
  }
  return newArr.length;
}
const numbers = [5, 6, 11, 12, 98, 5, 98, 98];
const c = count(numbers, 25);
console.log(c);
