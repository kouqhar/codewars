function twoSum(numbers, target) {
  let indexes = [];
  numbers.forEach((num, index) => {
    let sub = target - num;
    let subIndex = numbers.indexOf(sub);
    if (numbers.includes(sub)) {
      if (index - subIndex === 0) return false;
      else indexes.push([index, subIndex]);
    }
  });
  return indexes[0];
}
