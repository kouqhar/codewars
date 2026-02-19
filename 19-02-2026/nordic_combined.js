function calculateStartDelays(jumpScores) {
  const max_score = Math.max(...jumpScores);

  return jumpScores.map((score) => Math.ceil((max_score - score) * 1.5));
}

console.log(calculateStartDelays([120, 110, 125])); // [8, 23, 0]
console.log(calculateStartDelays([118, 125, 122, 120])); // [11, 0, 5, 8]
console.log(calculateStartDelays([100, 105, 95, 110, 120, 115, 108])); // [30, 23, 38, 15, 0, 8, 18]
