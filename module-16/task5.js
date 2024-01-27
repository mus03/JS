// difference between parseInt() and number()
let string1 = '10.6 objects';
let number1 = parseInt(string1);
let number2 = Number(string1);
 
console.log("Output of parseInt is: " + number1);
console.log("Output of Number is: " + number2);

// Output of parseInt is: 10
// Output of Number is: NaN

let string2 = '3.1415';
let number3 = parseInt(string2);
let number4 = Number(string2);

console.log("Output of parseInt is: " + number3);
console.log("Output of Number is: " + number4);

// Output of parseInt is: 3
// Output of Number is: 3.1415

let string3 = '1100';
let number5 = parseInt(string3,2); //The string passed is parsed with the base of 2.
let number6 = Number(string3);

console.log("Output of parseInt is: " + number5);
console.log("Output of Number is: " + number6);

// Output of parseInt is: 12 //decimal number:12
// Output of Number is: 1100
let string4 = '10'
let number7 = parseInt(string4,);
console.log("Output of parseInt is: " + number7);