function isLucky(n) {
  let sum = n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);

  return sum === 0 || sum % 9 === 0;
}
