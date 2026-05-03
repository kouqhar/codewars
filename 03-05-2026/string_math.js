function doMath(str) {
  const operations = str
    .split(/\d/)
    .filter((s) => s.length > 0)
    .map((s) => s.length % 2 === 0);
  const numbers = str.match(/\d+/g).map(Number);
  const isLastStrNum = isNaN(str.at(-1)) ? operations.pop() : null;
  const isFirstStrNum = isNaN(str[0]) ? operations.shift() : null;

  let strValue = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (operations[i - 1]) strValue += numbers[i];
    else strValue -= numbers[i];
  }

  return strValue;
}

console.log(doMath("3ab10c8")); // should return 5
console.log(doMath("6MINUS4")); // should return 2
console.log(doMath("9plus3")); // should return 12
console.log(doMath("5fkwo#10i#%.<>15P=@20!#B/25")); // should return 15
console.log(
  doMath(
    "a.67,1$lk6ldf34@#LD@]2d32d2'2l3,@l3L#@2gh35s09if=df#$t9sm49t0df3$^%[vc;:0:4mt",
  ),
); // should return 67
