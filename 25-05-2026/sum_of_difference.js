function sumOfDifferences(arr) {
  let diffSum = 0;

  for (let i = 0; i < arr.length - 1; i++) diffSum += arr[i + 1] - arr[i];

  return diffSum;
}

console.log(sumOfDifferences([1, 3, 4])); // 3.
console.log(sumOfDifferences([5, -3, 3, 9, 10])); // 5.
console.log(sumOfDifferences([9, 6, 15, -20, 33, 14, 25, 16, -7])); // -16.
console.log(
  sumOfDifferences([50, 102, -46, 82, -49, 29, 71, 902, -237, 111, -61, 75]),
); // 25.
