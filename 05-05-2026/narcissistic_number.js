function isNarcissistic(n) {
  return (
    n
      .toString()
      .split("")
      .reduce(
        (acc, digit) => acc + Math.pow(parseInt(digit), n.toString().length),
        0,
      ) === parseInt(n)
  );
}

console.log(isNarcissistic(153)); // true
console.log(isNarcissistic(154)); // false
console.log(isNarcissistic(371)); // true
console.log(isNarcissistic(512)); // false
console.log(isNarcissistic(9)); // true
console.log(isNarcissistic(11)); // false
console.log(isNarcissistic(9474)); // true
console.log(isNarcissistic(6549)); // false
