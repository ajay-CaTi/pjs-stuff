const marks = [80, 80, 50];

// Avg = 70

// 1-39: F
// 40-59: E
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(avg(marks));

function avg(params) {
  let avg = 0;
  for (const iterator of params) {
    avg += iterator;
  }
  avg = Math.floor(avg / params.length);
  console.log(avg, "avg");

  if (avg > 0 && avg <= 39) {
    return "F";
  }

  if (avg > 40 && avg <= 59) {
    return "E";
  }

  if (avg > 60 && avg <= 69) {
    return "D";
  }

  if (avg > 70 && avg <= 79) {
    return "C";
  }

  if (avg > 80 && avg <= 89) {
    return "B";
  }

  if (avg > 90 && avg <= 100) {
    return "A";
  }
}
