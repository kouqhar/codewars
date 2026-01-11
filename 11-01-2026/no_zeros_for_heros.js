function noBoringZeros(n) {
  const [toArr, holdingArr] = [n.toString().split(""), []];

  for (let i = toArr.length - 1; i >= 0; i--) {
    if (toArr[i] == 0) holdingArr.push(i);
    else {
      holdingArr.push(false);
      break;
    }
  }

  const numIndex = toArr.length - holdingArr.indexOf(false);
  const toNumber = Number(toArr.splice(0, numIndex).join(""));
  return toNumber;
}
