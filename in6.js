let i = 0;
while (i <= 10) {
  if (i === 5) break; // jump out of the loop
  if (i % 2 === 0) {
    i++;
    continue; // jump next iteraton
  }

  console.log(i);
  i++;
}
