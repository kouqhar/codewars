function getLandingStance(startStance, rotation) {
  return Math.floor(Math.abs(rotation / 180)) % 2 === 0
    ? startStance
    : startStance === "Regular"
      ? "Goofy"
      : "Regular";
}

console.log(getLandingStance("Regular", 90)); // Regular
console.log(getLandingStance("Regular", 180)); // Goofy
console.log(getLandingStance("Goofy", -270)); // Regular
console.log(getLandingStance("Regular", 2340)); // Goofy
console.log(getLandingStance("Goofy", 2160)); // Goofy
console.log(getLandingStance("Goofy", -540)); // Regular
