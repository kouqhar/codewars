function guessNumber(secret, guess) {
  return secret > guess ? "higher" : secret < guess ? "lower" : "you got it!";
}

console.log(guessNumber(50, 30)); // "higher".
console.log(guessNumber(85, 99)); // "lower".
console.log(guessNumber(2026, 2026)); // "you got it!".
console.log(guessNumber(92904, 11283)); // "higher".
console.log(guessNumber(230495, 423920)); // "lower".
console.log(guessNumber(120349, 120349)); // "you got it!".
