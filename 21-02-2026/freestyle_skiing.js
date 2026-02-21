function isValidTrick(trickName) {
  const valid_first = [
    "Misty",
    "Ghost",
    "Thunder",
    "Solar",
    "Sky",
    "Phantom",
    "Frozen",
    "Polar",
  ];

  const valid_second = [
    "Twister",
    "Icequake",
    "Avalanche",
    "Vortex",
    "Snowstorm",
    "Frostbite",
    "Blizzard",
    "Shadow",
  ];

  return (
    valid_first.includes(trickName.split(" ")[0]) &&
    valid_second.includes(trickName.split(" ")[1])
  );
}

console.log(isValidTrick("Polar Vortex")); // True
console.log(isValidTrick("Misty Twisters")); // False
console.log(isValidTrick("Solar Icequake")); // True
console.log(isValidTrick("Thunders Avalanche")); // False
