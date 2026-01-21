function sortArray(array) {
  let oddNumbers = array
    .filter((oddNum) => oddNum % 2 !== 0)
    .sort((a, b) => a - b);
  array.forEach((evenNum, index) => {
    if (evenNum % 2 === 0) oddNumbers.splice(index, 0, evenNum);
  });
  return oddNumbers;
}
