const computeScore = (judgeScores, ...penalties) =>
  judgeScores
    .sort((a, b) => a - b)
    .slice(1, judgeScores.length - 1)
    .reduce((acc, cur) => acc + cur) -
  (penalties.length > 1
    ? penalties.reduce((acc, cur) => acc + cur)
    : penalties[0] || 0);

console.log(computeScore([10, 8, 9, 6, 9, 8, 8, 9, 7, 7], 1)); // 64
console.log(computeScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 80
console.log(computeScore([10, 8, 9, 10, 9, 8, 8, 9, 10, 7], 1, 2, 1)); // 67
console.log(
  computeScore([8.0, 8.5, 9.0, 8.5, 9.0, 8.0, 9.0, 8.5, 9.0, 8.5], 0.5, 1.0),
); // 67.5
