function addBinary(a, b) {
  let sum = a + b;
  let partial = sum;
  const binary = [];

  while (sum >= 0) {
    const [division, modulus] = [partial / 2, partial % 2];

    binary.unshift(modulus);
    partial = Math.floor(division);

    if (partial === 0) sum = -1;
    else sum -= 2;
  }

  return binary.join("");
}
