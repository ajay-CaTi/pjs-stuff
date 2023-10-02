const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

for (let key in circle) {
  console.log(key, circle[key]); // Learn REVISE this ◀️
}

console.log(Object.keys(circle)); // REVISE this ◀️

// SUPER 1

for (let key of Object.keys(circle)) {
  console.log(key);
}

// SUPER 2

for (let key of Object.entries(circle)) {
  console.log(key); // rturn key value pair in form of array
}

// SUPER 3

if ("radius" in circle) console.log("yes");
