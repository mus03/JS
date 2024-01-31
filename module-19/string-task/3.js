// Check whether a string contains all the vowels a, e, i, o, u
let str = "i love amar country";
let vowel;
// console.log(str[0]);
for (let i = 0; i < str.length; i++) {
  if (
    str[i] == "a" ||
    str[i] == "e" ||
    str[i] == "i" ||
    str[i] == "o" ||
    str[i] == "u"
  ) {
    console.log("vowel present", str[i]);
  }
}
