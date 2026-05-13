const maxRotateFunction = (nums) => {
  let [arr, numLength, i, parArr] = [[], nums.length, 0, []];

  while (i < numLength) {
    const first = nums.shift();
    nums.push(first);

    const fac = nums.reduce((acc, cur, idx) => acc + cur * idx, 0);
    arr.push(fac);
    i++;
  }

  return Math.max(...arr);
};

console.log(maxRotateFunction([4, 3, 2, 6])); // 26
console.log(maxRotateFunction([100])); // 0
console.log(maxRotateFunction([1, 2, 3, 4, 5])); // 40
console.log(maxRotateFunction([1, 2, 3, 4, 5, 6])); // 70
console.log(maxRotateFunction([1, 2, 3, 4, 5, 6, 7])); // 112
console.log(maxRotateFunction([1, 2, 3, 4, 5, 6, 7, 8])); // 168
console.log(maxRotateFunction([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 252
console.log(maxRotateFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 360
