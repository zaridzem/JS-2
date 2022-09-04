function sum(...number) {
  let numbersum = 0;
  for (let item of number) {
    numbersum += item;
  }
  console.log(numbersum);
}
sum(10, 50, 6, 7, 8, 11, 6, 3, 9);
