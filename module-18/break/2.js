/* 
Write a while loop that adds numbers starting from 1, 
but stops (using break) as soon as the sum reaches or exceeds 100
*/
let x = 1;
let sum = 0;
while (true) {
  //   console.log("value of x", x);
  sum = sum + x;
  x++;
  if (sum >= 20) {
    break;
  }
  console.log("sum", sum);
}
console.log("total value: ", sum);
