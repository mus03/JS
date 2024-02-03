// Task-3
// Write a function called make_avg() which will take an array of integers
// and the size of that array and return the average of those values.

function make_avg(arr, arr_len) {
  console.log(arr);
  let sum = 0;
  let result = 0;
  for (let i = 0; i < arr_len; i++) {
    // console.log(arr[i]);
    sum += arr[i];
  }
  console.log("sum", sum);
  result = sum / arr_len;
  return result;
}

const arr = [1, 2, 3, 4, 5];
const arrLen = arr.length;
const result = make_avg(arr, arrLen);
console.log("average of those values: ", result);
