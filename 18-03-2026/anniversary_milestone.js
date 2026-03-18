function getMilestone(years) {
  const chart = {
    0: "Newlyweds",
    1: "Paper",
    5: "Wood",
    10: "Tin",
    25: "Silver",
    40: "Ruby",
    50: "Gold",
    60: "Diamond",
    70: "Platinum",
  };

  const position = Object.keys(chart)
    .filter((elem) => elem < years)
    .at(-1);

  return chart[years] ? chart[years] : chart[position] || chart[0];
}

console.log(getMilestone(0)); // "Newlyweds".
console.log(getMilestone(1)); // "Paper".
console.log(getMilestone(8)); // "Wood".
console.log(getMilestone(10)); // "Tin".
console.log(getMilestone(26)); // "Silver".
console.log(getMilestone(45)); // "Ruby".
console.log(getMilestone(50)); // "Gold".
console.log(getMilestone(64)); // "Diamond".
console.log(getMilestone(71)); // "Platinum".
