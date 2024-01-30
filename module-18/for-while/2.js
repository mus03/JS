/*
Subtask-1:
Find all the odd numbers from 61 to 100.
 */
console.log("Using For Loop");
for (let x = 61; x <= 100; x++) {
  if (x % 2 !== 0) {
    console.log("Odd number: ", x);
  }
}

//using while loop
console.log("using while loop");
let i = 61;
while (i <= 100) {
  if (i % 2 !== 0) {
    console.log("Odd number: ", i);
  }
  i++;
}
/*
Subtask-2:
Find all the even numbers from 78 to 98.
 */

console.log("Using For Loop");
for (let x = 78; x <= 98; x++) {
  if (x % 2 === 0) {
    console.log("Even number: ", x);
  }
}

//using while loop
console.log("using while loop");
let m = 78;
while (m <= 98) {
  if (m % 2 === 0) {
    console.log("Even number: ", m);
  }
  m++;
}
