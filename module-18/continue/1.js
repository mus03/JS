/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
for (let i = 1; i <= 40; i++) {
  console.log("initial number", i);
  if (i % 2 === 0) {
    console.log("even number: ", i);
  } else {
    continue;
  }
}

//one sample question

// const a = [1, 2, 3, 4, 5, 6, 7];
// console.log(a.length);
// for (let i = 1; i < a.length; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(a[i]);
// }
