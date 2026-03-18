function largestNumber(str) {
  return str
    .replace(/[\!\,\?\:\;]/gi, ",")
    .split(",")
    .map(Number)
    .sort((a, b) => a - b)
    .at(-1);
}

console.log(largestNumber("1,2")); // 2.
console.log(largestNumber("4;15:60,26?52!0")); // 60.
console.log(
  largestNumber("-402,-1032!-569:-947;-633?-800!-1012;-402,-723?-8102!-3011"),
); // -402.
console.log(largestNumber("12;-50,99.9,49.1!-10.1?88?16")); // 99.9.
