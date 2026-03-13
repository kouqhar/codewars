function ipsBetween(start, end) {
  const [sf, ss, st, sft] = start.split(".").map(Number);
  const [ef, es, et, eft] = end.split(".").map(Number);

  const startIp = sf * 256 ** 3 + ss * 256 ** 2 + st * 256 + sft;
  const endIp = ef * 256 ** 3 + es * 256 ** 2 + et * 256 + eft;

  return endIp - startIp;
}

console.log(ipsBetween("10.0.0.0", "10.0.0.50")); // 50
console.log(ipsBetween("1.2.3.4", "5.6.7.8")); // 67372036
console.log(ipsBetween("180.0.0.0", "181.0.0.0")); // 16777216
console.log(ipsBetween("50.0.0.0", "50.1.1.1")); // 65793
