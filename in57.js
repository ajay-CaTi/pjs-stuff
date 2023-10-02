// const person = {
//   fn: "ak",
//   ln: "mk",
//   fullname() {
//     return `${this.fn}` + `${this.ln}`;
//   },
// };

// console.log(person.fullname());

// Problem is that we cannot set or change its properties and we have to call it like a method

// Getter or setters

// getter:- access properties
// setter:- change (mutate) them

const person = {
  fn: "ak",
  ln: "mk",
  get fullname() {
    return `${this.fn}` + `${this.ln}`;
  },
  set fullname(value) {
    const parts = value.split(" ");
    this.fn = parts[0];
    this.ln = parts[1];
  },
};

person.fullname = "some one";

console.log(person.fullname);
console.log(person);
