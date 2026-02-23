function groundhogDayPrediction(appearance) {
  if (typeof appearance !== "boolean") return "No prediction this year.";

  return appearance
    ? "Looks like we'll have six more weeks of winter."
    : "It's going to be an early spring.";
}

console.log(groundhogDayPrediction(true)); // "Looks like we'll have six more weeks of winter."
console.log(groundhogDayPrediction(" ")); // "No prediction this year."
console.log(groundhogDayPrediction(null)); // "No prediction this year."
console.log(groundhogDayPrediction(false)); // "It's going to be an early spring."
console.log(groundhogDayPrediction("true")); // "No prediction this year."
