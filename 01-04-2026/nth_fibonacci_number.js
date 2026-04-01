function nthFibonacci(n) {
  const fibArr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

  if (n <= 11) return fibArr[n - 1];
  else for (let i = 11; i < n; i++) fibArr.push(fibArr[i - 1] + fibArr[i - 2]);

  return fibArr[n - 1];
}

console.log(nthFibonacci(4)); // 2.
console.log(nthFibonacci(10)); // 34.
console.log(nthFibonacci(15)); // 377.
console.log(nthFibonacci(40)); // 63245986.
console.log(nthFibonacci(75)); // 1304969544928657.
