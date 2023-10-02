// Take address and return it EXERCISE

let address = {
  street: "d",
  city: "b",
  zipCode: "c",
};

function showAddress(address) {
  for (const key in address) {
    console.log(key, address[key]);
  }
}

showAddress(address);
