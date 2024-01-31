// Count how many times a string has the letter a
let str = "aaraam";
let sum = 0;
for (const i of str) {
  console.log(i);
  if (i === "a") {
    sum++;
    // console.log(sum);
  }
}

console.log(sum);
