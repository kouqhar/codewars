function findMissingInteger(A) {
  A = A.filter((elem) => elem > 0).sort((a, b) => a - b);

  if (A.length < 1) return 1;
  else {
    const uniqueSet = [...new Set(A)];
    const [maxValue, minValue] = [
      Math.max(...uniqueSet),
      Math.min(...uniqueSet),
    ];

    if (uniqueSet.length == maxValue) return maxValue + 1;
    else {
      for (let i = 0; i <= maxValue; i++) {
        const [isCurValue, curArr] = [minValue + i, uniqueSet[i]];

        if (isCurValue == curArr) continue;
        return isCurValue;
      }
    }
  }
}

console.log(findMissingInteger([1, 3, 6, 4, 1, 2])); // 5
console.log(findMissingInteger([1, 2, 3])); // 4
console.log(findMissingInteger([-1, -2, 0])); // 1
console.log(findMissingInteger([2, 3, 7, 6, 8, -1, -10, 15]));
