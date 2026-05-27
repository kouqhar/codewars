function getPizzasToOrder(hoursWorked) {
  let totalSlices = 0;

  hoursWorked.forEach((elem) => {
    const slice = Math.ceil(elem / 3);
    slice < 2 ? (totalSlices += 2) : (totalSlices += slice);
  });

  return Math.ceil(totalSlices / 8);
}

console.log(getPizzasToOrder([8, 8, 8])); // 2.
console.log(getPizzasToOrder([10, 9, 8, 2, 2, 6, 10])); // 3.
console.log(getPizzasToOrder([1, 2, 3, 4, 5])); // 2.
console.log(getPizzasToOrder([8, 8, 8, 8, 8, 8, 8, 8])); // 3.
console.log(getPizzasToOrder([9, 9, 6])); // 1.
console.log(getPizzasToOrder([10, 12, 16, 9, 8, 11, 15, 8, 0])); // 5.
