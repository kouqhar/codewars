const number = (array) =>
  array.length < 1 ? [] : array.map((arr, index) => `${index + 1}: ${arr}`);

console.log(number(["a", "b", "c"]));
