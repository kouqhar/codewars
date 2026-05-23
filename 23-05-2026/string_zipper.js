function zipStrings(a, b) {
  let [aSplit, bSplit, finalStr] = [a.split(""), b.split(""), ""];
  const remainingB = bSplit?.slice(aSplit.length).join("") || "";

  aSplit.forEach((elem, i) => (finalStr += elem + bSplit[i]));

  return finalStr.concat(remainingB);
}

console.log(zipStrings("abc", "123")); // "a1b2c3".
console.log(zipStrings("acegikmoqsuwy", "bdfhjlnprtvxz")); // "abcdefghijklmnopqrstuvwxyz".
console.log(zipStrings("day", "night")); // "dnaiyght".
console.log(zipStrings("python", "javascript")); // "pjyatvhaosncript".
console.log(zipStrings("feCdCm", "reoeap")); // "freeCodeCamp".
