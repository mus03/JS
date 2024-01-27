/***
you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. 
if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.
 */

//if-else
const num1 = 2;
const num2 = 6;
// if(num1>num2){
//     const result = num1*2;
//     console.log(result);
// }
// else{
//     console.log(num1+num2);
// }

//ternary 
//condition ? true : false
(num1>num2) ? result=num1*2 : result=num1+num2
console.log(result);
