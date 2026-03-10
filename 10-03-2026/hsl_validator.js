function isValidHSL(hsl) {
  const hslRegex =
    /^hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)\s*;?$/i;
  const match = hsl.match(hslRegex);

  if (!match) return false;

  const [, h, s, l] = match.map(Number);

  if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100) return false;

  return true;
}

console.log(isValidHSL("hsl(240, 50%, 50%)")); // true.
console.log(isValidHSL("hsl( 200 , 50% , 75% )")); // true.
console.log(isValidHSL("hsl(99,60%,80%);")); // true.
console.log(isValidHSL("hsl(0, 0%, 0%) ;")); // true.
console.log(isValidHSL("hsl(  10  ,  20%   ,  30%   )    ;")); // true.
console.log(isValidHSL("hsl(361, 50%, 80%)")); // false.
console.log(isValidHSL("hsl(300, 101%, 70%)")); // false.
console.log(isValidHSL("hsl(200, 55%, 75)")); // false.
console.log(isValidHSL("hsl (80, 20%, 10%)")); // false.
