/*
Subtask-1:
Display sum of all the odd numbers from 91 to 129.
 */
console.log("Using For Loop");
let sum = 0;
for (let x = 91; x <= 129; x++) {
  if (x % 2 !== 0) {
    sum += x; //sum=sum+x;
    console.log("sum of all the odd numbers: ", sum);
  }
}
console.log("sum of all the odd numbers: ", sum);

//using while loop
console.log("using while loop");
let i = 81;
let total = 0;
while (i <= 131) {
  if (i % 2 !== 0) {
    total += i; //sum=sum+x;
    console.log("sum of all the odd numbers: ", total);
  }
  i++;
}
console.log("sum of all the odd numbers: ", total);

/*
Subtask-2:
Display sum of all the even numbers from 51 to 85.
 */

console.log("Using For Loop");
let s = 0;
for (let x = 51; x <= 85; x++) {
  if (x % 2 === 0) {
    s += x; //sum=sum+x;
    console.log("sum of all the even numbers: ", s);
  }
}
console.log("sum of all the even numbers: ", s);

//using while loop
console.log("using while loop");
let m = 206;
let t = 0;
while (m <= 311) {
  if (m % 2 === 0) {
    t += m; //sum=sum+x;
    console.log("sum of all the even numbers: ", t);
  }
  m++;
}
console.log("sum of all the even numbers: ", t);
