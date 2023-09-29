const array = [0, null, undefined, "", false, NaN, true, 1, 23, "sun"];

function countTruthy(array) {
  let i = 0;
  for (const item of array) {
    if (item) {
      i++;
    }
  }
  return "Number of Truthy values are", i;
}

console.log(countTruthy(array));
