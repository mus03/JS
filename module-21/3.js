// Task-3:
// Write a function to count the number of vowels in a string.
function vowel(string) {
  console.log(string);
  string = string.toLowerCase();
  let count = 0;
  for (const s of string) {
    if (s === "a" || s === "e" || s === "i" || s === "o" || s === "u") {
      count++;
    }
  }
  return count;
}

let str = "I Want To Explore JavaScript Lessons";
const count = vowel(str);
// console.log("vowels in", str, ": ", count);
console.log(`vowels in ${str}= ${count}`);
