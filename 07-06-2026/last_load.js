function lastLoadDate(scoops, usage) {
  const [usage_len, usage_sum] = [
    usage.length,
    usage.reduce((a, b) => a + b, 0),
  ];
  const usage_avg = usage_sum / usage_len;

  return Math.floor(scoops / usage_avg);
}

console.log(lastLoadDate(10, [2, 2, 2, 2, 2, 2, 2])); // 5.
console.log(lastLoadDate(16, [2, 3, 0, 3, 4, 2, 1])); // 7.
console.log(lastLoadDate(33, [5, 0, 4, 3, 3, 2])); // 11.
console.log(lastLoadDate(50, [2, 0, 2, 9, 12, 0, 2])); // 12.
console.log(lastLoadDate(20, [13, 9, 12, 10, 8])); // 1.
