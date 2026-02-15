function largestDifference(skater1, skater2) {
  let lapRecord = [-Infinity, 0];

  skater1.forEach((time, idx) => {
    let dif = Math.abs(time - skater2[idx]);
    dif > lapRecord[0] ? (lapRecord = [dif, idx + 1]) : [];
  });

  return lapRecord[1];
}

console.log(
  largestDifference(
    [27.04, 25.94, 26.22, 26.07, 26.18],
    [25.59, 25.8, 26.11, 26.01, 26.23],
  ),
);
// Output: 1
console.log(
  largestDifference(
    [26.11, 25.8, 25.92, 26.23, 26.07],
    [25.93, 25.74, 26.53, 26.11, 26.3],
  ),
);
// Output: 3
console.log(
  largestDifference(
    [25.82, 25.9, 26.05, 26.0, 26.48],
    [25.85, 25.92, 26.07, 25.98, 25.95],
  ),
);
// Output: 5
