// 1.

// const person = {
//   fn: "ak",
//   ln: "mk",
//   get fullname() {
//     return `${this.fn}` + `${this.ln}`;
//   },
//   set fullname(value) {
//     try {
//       const parts = value.split(" ");
//       this.fn = parts[0];
//       this.ln = parts[1];
//     } catch (error) {
//       console.log(error);
//     }
//   },
// };

// person.fullname = true;

// console.log(person.fullname);
// console.log(person);

// 2.

// const person = {
//   fn: "ak",
//   ln: "mk",
//   get fullname() {
//     return `${this.fn}` + `${this.ln}`;
//   },
//   set fullname(value) {
//     if (value.type !== "string") return; // Return bi default fn ln
//     const parts = value.split(" ");
//     this.fn = parts[0];
//     this.ln = parts[1];
//   },
// };

// person.fullname = true;

// console.log(person.fullname);
// console.log(person);

// 3.

// const person = {
//   fn: "ak",
//   ln: "mk",
//   get fullname() {
//     return `${this.fn}` + `${this.ln}`;
//   },
//   set fullname(value) {
//     // let e = new Error();
//     // console.log(e);
//     if (value.type !== "string") throw new Error("Value is not a string");

//     const parts = value.split(" ");
//     this.fn = parts[0];
//     this.ln = parts[1];
//   },
// };
// // very Very imp
// try {
//   person.fullname = true;
// } catch (e) {
//   alert(e);
// }
// console.log(person.fullname);
// console.log(person);

// 4.

const person = {
  fn: "ak",
  ln: "mk",
  get fullname() {
    return `${this.fn}` + `${this.ln}`;
  },
  set fullname(value) {
    if (typeof value !== "string") throw new Error("Value is not a string");

    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Error first and last name");
    this.fn = parts[0];
    this.ln = parts[1];
  },
};
// very Very imp
try {
  person.fullname = "";
} catch (e) {
  alert(e);
}
console.log(person.fullname);
console.log(person);
