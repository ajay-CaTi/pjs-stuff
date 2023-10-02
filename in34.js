// let address = {
//   street: "d",
//   city: "b",
//   zipCode: "c",
// };

// Factory function

// function streetAdd(street, city, zip) {
//   return {
//     street,
//     city,
//     zip,
//   };
// }
// const add1 = streetAdd("a", "b", "c");
// console.log(add1);

// Constructor function

// function Address(street, city, zip) {
//   this.street = street;
//   this.city = city;
//   this.zip = zip;
// }

// const add = new Address("a", "b", "c");
// console.log(add);

// function address(street, city, zipCode) {
//   return { street, city, zipCode };
// }
// const add = address(35, "colo", 201053);
// console.log(add);

function Address(street, city, zipCode) {
  (this.street = street), (this.city = city), (this.zipCode = zipCode);
}

const add = new Address(35, "colo", 201053);
console.log(add);
