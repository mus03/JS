// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
// Input: const statement = 'I am a hard working person'
// Output:
// 'person working hard a am I'
const statement = "I am a hard working person";
console.log(statement.length);
const state = statement.split(" ");
console.log(state);
let reverseState = [];
for (let i = 0; i < state.length; i++) {
  console.log(state[i]);
  reverseState.unshift(state[i]);
}
console.log(reverseState.join(" ")); //person working hard a am I
