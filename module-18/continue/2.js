/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

for (let i = 55; i <= 85; i++) {
  //   console.log("initial number", i);
  if (i % 2 !== 0) {
    if (i % 5 === 0) {
      continue;
    }
    console.log("odd numbers", i);
  }
}
