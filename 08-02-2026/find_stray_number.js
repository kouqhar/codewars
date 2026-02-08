const stray = (numbers) => {
  let [uniqueNumber, finalResult] = [
    [...new Set(numbers)],
    [Infinity, Infinity],
  ];

  if (uniqueNumber.length === 1) return uniqueNumber[0];

  uniqueNumber.forEach((num) => {
    const numLength = numbers.join("").match(new RegExp(num, "g")).length;

    if (numLength < finalResult[0]) {
      finalResult[0] = numLength;
      finalResult[1] = num;
    }
  });

  return finalResult[1];
};

console.log(stray([1, 1, 1, 2, 2, 3, 3, 3]));
