// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd.
//  If even return Even. If odd return Odd

function odd_even(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

const result = odd_even(13);
console.log(result);
