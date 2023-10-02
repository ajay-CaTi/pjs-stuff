function interest(p, r = 3.5, y = 5) {
  //   r = rate || 3.5;
  //   y = year || 5;
  return ((p * r) / 100) * y;
}

console.log(interest(1000, undefined));
