function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15.
console.log(sumArray([42])); // 42.
console.log(sumArray([5, -2, 7, -3])); // 7.
console.log(sumArray([203, 145, -129, 6293, 523, -919, 845, 2434])); // 9395.
console.log(sumArray([0, 0])); // 0.
