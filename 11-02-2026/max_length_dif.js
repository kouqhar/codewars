function mxdiflg(a1, a2) {
  if (a1.length < 1 || a2.length < 1) return -1;
  else {
    const a1Sorted = a1.sort((a, b) => a.length - b.length);
    const a2Sorted = a2.sort((a, b) => a.length - b.length);
    const [a1Longest, a2Longest] = [
      a1Sorted.at(-1).length - a2Sorted[0].length,
      a2Sorted.at(-1).length - a1Sorted[0].length,
    ];

    return Math.max(a1Longest, a2Longest);
  }
}

console.log(
  mxdiflg(
    [
      "hoqq",
      "bbllkw",
      "oox",
      "ejjuyyy",
      "plmiis",
      "xxxzgpsssa",
      "xxwwkktt",
      "znnnnfqknaz",
      "qqquuhii",
      "dvvvwz",
    ],
    ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"],
  ),
); // 13
