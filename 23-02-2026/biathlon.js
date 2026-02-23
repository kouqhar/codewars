function calculatePenaltyDistance(rounds) {
  return rounds.reduce((acc, cur) => acc + (5 - cur) * 150, 0);
}

console.log(calculatePenaltyDistance([4, 3, 0, 3])); // 1500
console.log(calculatePenaltyDistance([4, 5, 3, 5])); // 450
console.log(calculatePenaltyDistance([5, 5])); // 0
console.log(calculatePenaltyDistance([4, 4])); // 300
