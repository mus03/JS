/*
What will be the result of the following codes:
var a = isNaN(‘11’);
var a = isNaN(2-10);
Explain your answers.
*/
/*
In JavaScript NaN is short for "Not-a-Number".

The isNaN() method returns true if a value is NaN.

The isNaN() method converts the value to a number before testing it.

here in both examples, both output is a number so the ans we get is false. 
-> in first example the input is string. 
but before it tests isNaN() converts the value to number then gives the output.
so in first case the number is 11 which is a number and the result is "false" 
-> in second example the input is 2-10 i.e. -8 which is a number. 
so the result is "false" 
*/

var a = isNaN('11');
console.log(a);
var b = isNaN(2-10);
console.log(b);
var c= Number(2-10);
console.log(c);
var d= Number('11');
console.log(d);