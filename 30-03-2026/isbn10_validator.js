function isValidIsbn10(str) {
  const firstNineDigits = str.replace(/-/g, "").slice(0, 9);

  if (str.length - 3 !== 10 || !/^\d{9}$/.test(firstNineDigits)) return false;

  const isbn = str.match(/^\d{1}-\d+-\d+-[\dX]$/);
  if (isbn) {
    const lastChar = str.at(-1) === "X" ? "10" : str.at(-1);
    const digits = str.replace(/-/g, "").split("").map(Number);
    digits.splice(-1, 1, Number(lastChar));

    const sum = digits.reduce(
      (acc, digit, index) => acc + digit * (index + 1),
      0,
    );

    return sum % 11 === 0;
  }
}

console.log(isValidIsbn10("0-306-40615-2")); // true
console.log(isValidIsbn10("0-306-40615-1")); // false
console.log(isValidIsbn10("0-8044-2957-X")); // true
console.log(isValidIsbn10("X-306-40615-2")); // false
console.log(isValidIsbn10("0-6822-2589-4")); // true
