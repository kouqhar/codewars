function skiJumpMedal(distancePoints, stylePoints, windComp, kPointBonus) {
  const total = distancePoints + stylePoints + windComp + kPointBonus;
  const points = [
    165.5,
    172.0,
    158.0,
    180.0,
    169.5,
    175.0,
    162.0,
    170.0,
    total,
  ].sort((a, b) => b - a);

  return points[0] == total
    ? "Gold"
    : points[1] == total
      ? "Silver"
      : points[2] == total
        ? "Bronze"
        : "No Medal";
}

console.log(skiJumpMedal(125.0, 58.0, 0.0, 6.0)); // "Gold"
console.log(skiJumpMedal(119.0, 50.0, 1.0, 4.0)); // "Bronze"
console.log(skiJumpMedal(122.0, 52.0, -1.0, 4.0)); // "Silver"
console.log(skiJumpMedal(118.0, 50.5, -1.5, 4.0)); // "No Medal"
