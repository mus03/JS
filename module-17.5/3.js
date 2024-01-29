// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.
let books = ["bangla", "english", "maths"];
// Use the includes method to check if the array contains a javascript book.
console.log(books.includes("science"));
console.log(books.includes("english"));
// Print a message to the console indicating whether the element is present in the array or not.
console.log(
  books.includes("science") +
    " science book is not present in the array of books"
);
console.log(
  books.includes("maths") + " maths is present in the array of books"
);
