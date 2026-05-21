function getBingoRange(letter) {
  const bingoRanges = {
    B: [1, 15],
    I: [16, 30],
    N: [31, 45],
    G: [46, 60],
    O: [61, 75],
  };
  let [[start, end], range] = [bingoRanges[letter], []];

  for (let i = start; i <= end; i++) range.push(i);

  return range;
}

console.log(getBingoRange("B")); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].
console.log(getBingoRange("I")); // [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].
console.log(getBingoRange("N")); // [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45].
console.log(getBingoRange("G")); // [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60].
console.log(getBingoRange("O")); // [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75].
