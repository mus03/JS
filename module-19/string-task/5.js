// Capitalize Every first Letter of each word in a String
let str = "my name is muskan";
str2 = str.split(" ");
console.log(str2);
for (let i = 0; i < str2.length; i++) {
  // console.log(str[i]);
  // console.log(str[i][0].toUpperCase() + str[i]);
  str2[i] = str2[i][0].toUpperCase() + str2[i].slice(1);
}
console.log(str2);
console.log(str2.join(" "));
