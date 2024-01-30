/*
Generate a multiplication table for number 9
 */
//using for loop
console.log("Using For Loop");
let mul = 1;
const num = 9;
for (let x = 1; x <= 10; x++) {
  mul = num * x;
  console.log(num, " * ", x, " = ", mul);
}

//using while loop
console.log("using while loop");
let i = 1;
let m = 1;
const n = 5;
while (i <= 10) {
  m = n * i;
  console.log(n, " * ", i, " = ", m);
  i++;
}
