// Capitalize Every first Letter of each word in a String
let str = "my name is muskan";
str = str.split(" ");
console.log(str);
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
  if (i === 0 || str[i] === " ") {
    console.log(str[i].toUpperCase());
  }
}
