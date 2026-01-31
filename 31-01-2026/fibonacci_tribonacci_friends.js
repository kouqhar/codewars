const Xbonacci = (signature, n) => {
  let orgArr = [...signature];
  let [len, sigLen, arr] = [orgArr.length, signature.length, []];

  if (n === 0) return [];
  else if (len > n) orgArr = signature.slice(0, n);
  else {
    for (let i = len; i < n; i++) {
      if (i <= n) {
        arr = orgArr.slice(-sigLen);
        let nextValue = arr.reduce((acc, curr) => acc + curr, 0);
        orgArr.push(nextValue);
        arr = [];
      } else return 1;
    }
  }
  return orgArr;
};
