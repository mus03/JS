// Count how many times a string has the letter a or A
let str = "AAaaraam";
let sumA = 0;
let suma = 0;
for (const i of str) {
  console.log(i);
  if (i === "a") {
    suma++;
    console.log("a", suma);
  }
  if (i === "A") {
    sumA++;
    console.log("A", sumA);
  }
}
const total = suma + sumA;

console.log(total);
