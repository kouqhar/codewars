function getDivisorsCnt(n) {
  let divisorCounter = 0;
  for (let i = 1; i <= n; i++) n % i === 0 ? divisorCounter++ : null;

  return divisorCounter;
}
