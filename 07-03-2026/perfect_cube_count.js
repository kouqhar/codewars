function countPerfectCubes(a, b) {
  let [maxNum, minNum, absMax, count] = [
    Math.max(a, b),
    Math.min(a, b),
    Math.max(Math.abs(a), Math.abs(b)),
    0,
  ];
  let [negFalse, posFalse] = [true, true];

  for (let i = 0; i <= absMax; i++) {
    if (!negFalse && !posFalse) break;

    if (minNum < 0 && negFalse) {
      const negCube = -(i ** 3);
      if (negCube < 0 && negCube >= minNum) count++;
      if (negCube < minNum) negFalse = false;
    }

    if (maxNum > 1 && posFalse) {
      const cube = i ** 3;
      if (cube <= maxNum && cube >= minNum) count++;
      if (cube > maxNum) posFalse = false;
    }
  }

  return count;
}

countPerfectCubes(3, 30); // 2
countPerfectCubes(1, 30); // 3
countPerfectCubes(30, 0); // 4
countPerfectCubes(-64, 64); // 9
countPerfectCubes(9214, -8127); // 41
