// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function lowNum(height) {
  let min = height[0];
  //   console.log(min);
  for (const h of height) {
    // console.log(h.length);
    if (h.length < min.length) {
      min = h;
    }
  }
  return min;
}

const height = ["rahim", "robin", "rafi", "ron", "rashed"];
const lowest = lowNum(height);
console.log(lowest);
