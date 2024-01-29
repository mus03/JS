// 2. Add or remove elements
// Declare an array of 3 tourist destinations
let tourist = ["USA", "UK", "Canada"];
// Add a new tourist destination to your tourist array
let newDestination = ["Maldives", "Malaysia"];
tourist = tourist.concat(newDestination);
console.log(tourist);
// Add two more to your array
tourist.push("India", "Australia");
console.log(tourist);
// Remove the last tourist destination you have added
let a = tourist.pop();
console.log(a);
// display the final array as output
console.log(tourist);
