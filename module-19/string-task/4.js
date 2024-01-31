// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
// Hint: You should be able to check whether x or X exists. After that,
// search online how to replace a character in a string.
let str = "maxMAX";
// let strArray = str.split(" "); // array te split kaaj kore nh
// console.log(strArray);
for (let i = 0; i <= str.length; i++) {
  //   console.log(str[i]);
  if (str[i] === "x" || str[i] === "X") {
    if (str[i] === "x") {
      str = str.replace(str[i], "y");
    } else if (str[i] === "X") {
      str = str.replace(str[i], "Y");
    }
  }
}
console.log(str);
