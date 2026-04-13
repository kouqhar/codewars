function palindromeLocator(str) {
  const oddOrEven =
    str && str.length % 2 === 0
      ? str.slice(str.length / 2 - 1, str.length / 2 + 1)
      : str[Math.floor(str.length / 2)];

  return str.split("").reverse().join("") === str ? oddOrEven : "none";
}

console.log(palindromeLocator("racecar")); // "e".
console.log(palindromeLocator("level")); // "v".
console.log(palindromeLocator("freecodecamp")); // "none".
console.log(palindromeLocator("noon")); // "oo".
console.log(palindromeLocator("11100111")); // "00".
