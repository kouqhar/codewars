function checkEligibility(athleteWeights, sledWeight) {
  let [athSledSum, athLng, eligibility] = [
    athleteWeights.reduce((acc, cur) => acc + cur) + sledWeight,
    athleteWeights.length,
    "Not Eligible",
  ];

  if (athLng == 1 && sledWeight >= 162 && athSledSum <= 247)
    eligibility = "Eligible";
  else if (athLng == 2 && sledWeight >= 170 && athSledSum <= 390)
    eligibility = "Eligible";
  else if (athLng == 4 && sledWeight >= 210 && athSledSum <= 630)
    eligibility = "Eligible";

  return eligibility;
}

console.log(checkEligibility([106, 99, 90, 88], 205)); // "Not eligible".
console.log(checkEligibility([78], 165)); // Eligible
console.log(checkEligibility([80], 160)); // Not eligible
console.log(checkEligibility([85, 90], 170)); // Eligible
console.log(checkEligibility([85, 95], 168)); // Not eligible
console.log(checkEligibility([110, 102, 90, 106], 222)); // "Eligible".
