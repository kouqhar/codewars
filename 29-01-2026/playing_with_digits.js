function digPow(n, p) {
  const total = n
    .toString()
    .split("")
    .map((number, index) => {
      return number ** (p + index);
    })
    .reduce((acc, cur) => acc + cur, 0);

  const k = total / n;
  return n * k.toFixed(2) - Math.floor(n * k) !== 0 ? -1 : total / n;
}
