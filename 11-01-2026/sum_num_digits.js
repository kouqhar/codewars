const sumDigits = (number) =>
  +number
    .toString()
    .split("")
    .reduce((acc, cur) => (acc >= 0 ? Number(acc) : 0) + Number(cur));
console.log(sumDigits(1234)); // 10
