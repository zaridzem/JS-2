function sum(...number) {
  let numbersum = 0;
  for (let item of number) {
    if (item > 0) {
      numbersum += item;
    }
  }
  console.log(numbersum);
}
sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
