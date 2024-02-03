// Task-4
// Write a function called count_zero() which will take a binary string
// (Binary string is a string which is consist of only 0 and 1) as parameter
// and count how many 0’s are there in that string.

function count_zero(str) {
  console.log(str);
  let c = 0;
  //   console.log(typeof str[1]); //string
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      // here 0 is a string we cannot write 0 only, have to use "0"
      c++;
    }
  }
  return c;
}
const binStr = "10 01 010 1000";
// console.log(binStr);
const countZero = count_zero(binStr);
console.log(countZero);
