const tribonacci = (signature, n) => {
  let orgArr = [...signature];
  let len = orgArr.length;
  let arr = [];

  if (n === 0) return [];
  else if (n < 3) orgArr = orgArr.slice(0, n);
  else {
    for (let i = len; i < n; i++) {
      if (i <= n) {
        arr = orgArr.slice(-3);
        let nextValue = arr.reduce((acc, curr) => acc + curr, 0);
        orgArr.push(nextValue);
        arr = [];
      } else {
        return 1;
      }
    }
  }
  return orgArr;
};
