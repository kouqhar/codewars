function sumLetters(str) {
  let [alphabet, total] = [str.toUpperCase().match(/[a-zA-Z]/g), 0];

  alphabet &&
    alphabet.forEach((letter) => (total += letter.charCodeAt(0) - 64));

  return total;
}

console.log(sumLetters("Hello")); // 52
console.log(sumLetters("</404>")); // 0
console.log(sumLetters("The quick brown fox jumps over the lazy dog.")); // 473
console.log(sumLetters("freeCodeCamp")); // 94
console.log(
  sumLetters(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex nisl, pretium eu varius blandit, facilisis quis eros. Vestibulum ante ipsum primis in faucibus orci.",
  ),
); // 1681
