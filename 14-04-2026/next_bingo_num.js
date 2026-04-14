function getNextBingoNumber(n) {
  let [letter, number] = [n[0], Number(n.slice(1))];
  let lookUpTable = [
    ["B", 15],
    ["I", 30],
    ["N", 45],
    ["G", 60],
    ["O", 75],
  ];

  for (let i = 0; i < lookUpTable.length; i++) {
    if (lookUpTable[i][0] === letter) {
      number += 1;
      if (number > lookUpTable[i][1]) {
        let resetNumber = number > 75 ? 1 : number;
        return `${lookUpTable[(i + 1) % lookUpTable.length][0]}${resetNumber}`;
      } else return `${lookUpTable[i][0]}${number}`;
    }
  }
}

console.log(getNextBingoNumber("B10")); // "B11".
console.log(getNextBingoNumber("N33")); // "N34".
console.log(getNextBingoNumber("I30")); // "N31".
console.log(getNextBingoNumber("G60")); // "O61".
console.log(getNextBingoNumber("O75")); // "B1".
