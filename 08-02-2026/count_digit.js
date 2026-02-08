const nbDig = (n, d) => {
  let numbers = 0;

  for (let i = 0; i <= n; i++) {
    const numSquared = i ** 2;
    const numSquaredArr = numSquared
      .toString()
      .split("")
      .filter((elem) => elem === d.toString());
    numbers += numSquaredArr.length;
  }

  return numbers;
};

console.log(nbDig(5750, 0));
console.log(nbDig(11011, 2));
console.log(nbDig(12224, 8));
console.log(nbDig(11549, 1));
