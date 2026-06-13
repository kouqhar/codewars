function getZoneViolations(grid) {
  const adjacent_lookup = {
    i: new Set(["R", "I"]),
    A: new Set(["C"]),
    R: new Set(["i", "C"]),
    I: new Set(["i"]),
    C: new Set(["R", "A"]),
  };

  const [rowLen, arrToStr, violations] = [grid[0].length, grid.flat(1), []];
  const [gridLen, arrToStrLen] = [arrToStr[0].length, arrToStr.length];

  for (let i = 0; i < arrToStrLen; i++) {
    let [left, right] = [i - 1, i + 1];
    if (left >= 0 && i % rowLen == 0) left = -1;
    if (right >= 0 && i % rowLen == rowLen - 1) right = -1;

    const neighbors = [i - rowLen, i + rowLen, left, right, i];
    const currChar = arrToStr[i];
    const violationsArr = adjacent_lookup[currChar];

    if (currChar == "") continue;
    if (violationsArr) {
      const check = ViolationCheck(arrToStr, neighbors, violationsArr, rowLen);

      if (check) violations.push(check);
    }
  }

  return violations;
}

const ViolationCheck = (arr, neighbors, violationsArr, rowLen) => {
  const [[up, down, left, right, curr], arrLen] = [neighbors, arr.length];
  const [currRow, currCol] = [Math.floor(curr / rowLen), curr % rowLen];
  const result = [currRow, currCol];

  if (up >= 0 && violationsArr.has(arr[up])) return result;
  if (down >= 0 && violationsArr.has(arr[down])) return result;
  if (left >= 0 && violationsArr.has(arr[left])) return result;
  if (right >= 0 && violationsArr.has(arr[right])) return result;
};

console.log(
  getZoneViolations([
    ["R", "C"],
    ["", "C"],
  ]),
); // [[0, 0], [0, 1]].
console.log(
  getZoneViolations([
    ["", "i"],
    ["", "R"],
    ["R", "I"],
  ]),
); // [[0, 1], [1, 1]].
console.log(
  getZoneViolations([
    ["A", "i", "C"],
    ["A", "", "C"],
    ["R", "R", "I"],
  ]),
); // [].
console.log(
  getZoneViolations([
    ["R", "R", "C", "R", "R"],
    ["R", "I", "C", "", "A"],
    ["R", "R", "", "i", "A"],
  ]),
); // [[0, 1], [0, 2], [0, 3]].
console.log(
  getZoneViolations([
    ["R", "A", "A", "", "i", "i"],
    ["R", "I", "", "C", "i", "i"],
    ["R", "", "C", "C", "A", "A"],
    ["R", "R", "C", "I", "R", "R"],
  ]),
); // [[2, 3], [2, 4], [3, 1], [3, 2]].
