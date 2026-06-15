function sortNumbers(str) {
  return str
    .split(",")
    .map(Number)
    .sort((a, b) => a - b);
}

console.log(sortNumbers("3,1,2")); // [1, 2, 3].
console.log(sortNumbers("5,3,8,1,9,2")); // [1, 2, 3, 5, 8, 9].
console.log(sortNumbers("12,61,49,80,19,50,77,38")); // [12, 19, 38, 49, 50, 61, 77, 80].
console.log(sortNumbers("0,6,-19,44,-2,7,0")); // [-19, -2, 0, 0, 6, 7, 44].
