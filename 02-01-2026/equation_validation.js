function isValidEquation(equation) {
  const [left, right] = equation.split("=");
  const leftValue = eval(left.trim());

  return leftValue === parseFloat(right.trim());
}

console.log(isValidEquation("2 + 2 = 4")); // true.
console.log(isValidEquation("2 + 3 - 1 = 4")); // true.
console.log(isValidEquation("8 / 2 = 4")); // true.
console.log(isValidEquation("10 * 5 = 50")); // true.
console.log(isValidEquation("2 - 2 = 0")); // true.
console.log(isValidEquation("2 + 9 / 3 = 5")); // true.
console.log(isValidEquation("20 - 2 * 3 = 14")); // true.
console.log(isValidEquation("2 + 5 = 6")); // false.
console.log(isValidEquation("10 - 2 * 3 = 24")); // false.
console.log(isValidEquation("3 + 9 / 3 = 4")); // false.
