const binaryArrayToNumber = (arr) => {
  let [len, pow, decimal] = [arr.length, [], []];

  for (let i = 0; i <= len - 1; i++) pow.unshift(i);

  arr.forEach((x, index) => decimal.push(x * 2 ** pow[index]));

  let toDecimal = decimal.reduce((acc, curr) => acc + curr, 0);

  return toDecimal;
};
