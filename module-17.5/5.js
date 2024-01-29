// 5. Combining Arrays
// Instructions:

// Create two arrays of your choice.
let tourist = ["USA", "UK", "Canada"];
let newDestination = ["Maldives", "Malaysia"];
// Use the concat method to combine the two arrays into a new array.
newTourist = tourist.concat(newDestination);
console.log(newTourist);
// Print both the original arrays and the combined array using console.log().
console.log(tourist);
console.log(newDestination);
console.log(newTourist);

//splice(index,deleteCount,element1,element2,..)
newTourist.splice(1, 0, "bangladesh"); //Bangladesh will add beforth 1st index and 0 element will delete
console.log(newTourist);
let a = newTourist.splice(2, 1); //indeleted item will be stored in a(1 item will delete which is in the 2nd index)
console.log(a);
