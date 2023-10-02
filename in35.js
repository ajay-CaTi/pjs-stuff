// Exercise 3 pending OBJECT

const add = new Address("a", "b", "c");
const add1 = new Address("a", "b", "c");

// Constructor function

function Address(street, city, zip) {
  this.street = street;
  this.city = city;
  this.zip = zip;
}

console.log(add);

function areEqual(add, add1) {
  return (
    add.street === add1.street && add.city === add1.city && add.zip === add1.zip
  );
}
const op1 = areEqual(add, add1);
console.log(op1);

function areSame(add, add1) {
  return add === add1;
}

const op = areSame(add, add1);
console.log(op);
