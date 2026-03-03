function isFlat(arr) {
  return arr.every((item) => !Array.isArray(item));
}

console.log(isFlat([1, 2, 3, 4])); // true
console.log(isFlat([1, [2, 3], 4])); // false
console.log(
  isFlat([
    [1, 2],
    [3, 4],
  ]),
); // false
console.log(isFlat([1, 2, [3, 4], 5])); // false
console.log(isFlat([1, 2, 3, 4, 5])); // true
