function isValidCard(number) {
  let sum = number
    .split("")
    .reverse()
    .reduce((acc, cur, idx) => {
      const toNum = Number(cur);
      const num = (idx + 1) % 2 == 0 ? toNum * 2 : toNum;

      return acc + (num > 9 ? num - 9 : num);
    }, 0);

  return sum % 10 == 0;
}

console.log(isValidCard("4532015112830366")); // true.
console.log(isValidCard("5425233430109903")); // true.
console.log(isValidCard("371449635398431")); // true.
console.log(isValidCard("6011111111111117")); // true.
console.log(isValidCard("4532015112830367")); // false.
console.log(isValidCard("1234567890123456")); // false.
console.log(isValidCard("4532015112830368")); // false.
