const firstIncBtn = document.getElementById("first-inc");
const firstDecBtn = document.getElementById("first-dec");
const firstDisplay = document.getElementById("first-display");
let count = 0;
firstIncBtn.addEventListener("click", function () {
  count += 1;
  firstDisplay.innerText = count;
});
firstDecBtn.addEventListener("click", function () {
  count -= 1;
  firstDisplay.innerText = count;
});

//second
const secondIncBtn = document.getElementById("second-inc");
const secondDecBtn = document.getElementById("second-dec");
const secondDisplay = document.getElementById("second-display");
let c = 0;
secondIncBtn.addEventListener("click", function () {
  c += 1;
  secondDisplay.innerText = c;
});
secondDecBtn.addEventListener("click", function () {
  c -= 1;
  secondDisplay.innerText = c;
});

//result
const resultBtn = document.getElementById("result");
const resultDisplay = document.getElementById("result-display");
let sum = 0;
resultBtn.addEventListener("click", function () {
  sum = count + c;
  resultDisplay.innerText = sum;
});

//reset
const reset = document
  .getElementById("reset")
  .addEventListener("click", function () {
    firstDisplay.innerText = 0;
    secondDisplay.innerText = 0;
    resultDisplay.innerText = 0;
    count = 0;
    c = 0;
    sum = 0;
  });
