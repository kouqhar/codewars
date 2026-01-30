const expandedForm = (arr) => {
  let [pow, decimal, arr, len] = [[], [], arr.toString().split(""), arr.length];

  for (let i = 0; i <= len - 1; i++) {
    pow.unshift(i);
  }
  arr.forEach((x, index) => {
    x = parseInt(x);
    decimal.push(x * 10 ** pow[index]);
  });

  return decimal
    .filter((a) => a !== 0)
    .toString()
    .split(",")
    .join(" + ");
};
console.log(expandedForm(70304));
