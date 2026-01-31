var numbers = [1, 2, 3, 4, 5];

Array.prototype.square = function () {
  return this.map((num) => num ** 2);
};

Array.prototype.cube = function () {
  return this.map((num) => num ** 3);
};

Array.prototype.sum = function () {
  return this.reduce((acc, curr) => acc + curr, 0);
};

Array.prototype.average = function () {
  return this.reduce((acc, curr) => acc + curr, 0) / this.length;
};
Array.prototype.even = function () {
  return this.filter((num) => num % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter((num) => num % 2 !== 0);
};

console.log(numbers.square()); // [1, 4, 9, 16, 25]
console.log(numbers.cube()); // [1, 8, 27, 64, 125]
console.log(numbers.sum()); // 15
console.log(numbers.average()); // 3
console.log(numbers.even()); // [2, 4]
console.log(numbers.odd()); // [1, 3, 5]
