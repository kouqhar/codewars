function rookAttack(rook1, rook2) {
  return rook1[0] == rook2[0] || rook1[1] == rook2[1];
}

console.log(rookAttack("A1", "A8")); // true.
console.log(rookAttack("B4", "F4")); // true.
console.log(rookAttack("E3", "D4")); // false.
console.log(rookAttack("H7", "F6")); // false.
