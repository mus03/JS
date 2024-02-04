// Task-4:
// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer
// sample-output: Programming

function longest(str) {
  let longWord = "";
  str = str.split(" "); //string to array, returns an array
  //   console.log(str);
  let max = str[0].length; // 1
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i].length); // 1 2 8 11 2 6 1 10
    if (str[i].length > max) {
      max = str[i].length;
      longWord = str[i];
    }
  }
  return longWord;
}
const string = "I am learning Programming to become a programmer";
const long = longest(string);
console.log(`longest word in the string is = ${long}`);
