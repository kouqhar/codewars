function findDifferences(arr) {
  return arr.map((num, index) =>
    index === arr.length - 1 ? 0 : arr[index + 1] - num,
  );
}

console.log(findDifferences([1, 2, 3, 4, 5])); // [1, 1, 1, 1, 0]
console.log(findDifferences([10, 15, 19, 22, 24, 25])); // [5, 4, 3, 2, 1, 0]
console.log(findDifferences([1, 2, 4, 7])); // [1, 2, 3, 0]
console.log(
  findDifferences([
    1, 2, 5, 12, 34, -15, -1, 41, 113, -222, -99, -40, 10, -18, -6, -2, -1,
  ]),
); // [1, 3, 7, 22, -49, 14, 42, 72, -335, 123, 59, 50, -28, 12, 4, 1, 0]
