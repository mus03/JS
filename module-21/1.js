// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function celToFah(celcius) {
  console.log("celcius:", celcius);
  const fahrenheit = (celcius * 9) / 5 + 32;
  return fahrenheit;
}
const fahrenheit = celToFah(14);
console.log("fahrenheit:", fahrenheit);
