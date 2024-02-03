// Task-2
// Take a number if the number is odd multiply it by 2 and return the result.
// If the number is even divide it by two and return the result.

function DoSomeCalc(number) {
  //   console.log(number);
  if (number % 2 !== 0) {
    console.log("odd");
    number *= 2;
  } else {
    console.log("even");
    number /= 2;
  }
  return number;
}

const result = DoSomeCalc(5);
console.log(result);

//a function without return values gives "undefined"
