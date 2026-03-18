function isEvenlyDivisible(a, b) {
  return a % b == 0 ? true : false;
}

console.log(isEvenlyDivisible(4, 2)); // True.
console.log(isEvenlyDivisible(7, 3)); // False.
console.log(isEvenlyDivisible(5, 10)); // False.
console.log(isEvenlyDivisible(48, 6)); // True.
console.log(isEvenlyDivisible(3186, 9)); // True.
console.log(isEvenlyDivisible(4192, 11)); // False.
