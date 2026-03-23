function hasNoRepeats(str) {
  let noRepeats = true;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      noRepeats = false;
      break;
    }
  }

  return noRepeats;
}

console.log(hasNoRepeats("hi world")); // true.
console.log(hasNoRepeats("hello world")); // false.
console.log(hasNoRepeats("abcdefghijklmnopqrstuvwxyz")); // true.
console.log(hasNoRepeats("freeCodeCamp")); // false.
console.log(hasNoRepeats("The quick brown fox jumped over the lazy dog.")); // true.
console.log(hasNoRepeats("Mississippi")); // false.
