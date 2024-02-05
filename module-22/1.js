// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function lowNum(height) {
  let min = height[0];
  for (const h of height) {
    if (h < min) {
      min = h;
    }
  }
  return min;
}

const height = [167, 190, 120, 165, 137];
const lowest = lowNum(height);
console.log(lowest);
