function isValidIsbn13(str) {
  // Remove hyphens from the input string.
  str = str.replace(/-/g, "");

  // Check if the length of the string is 13 and if it contains only digits.
  if (str.length !== 13 || !/^\d+$/.test(str)) return false;

  return true;
}

console.log(isValidIsbn13("9780306406157")); // true.
console.log(isValidIsbn13("97803064061570")); // false.
console.log(isValidIsbn13("978-0-13-595705-9")); // true.
console.log(isValidIsbn13("978-030-64061A-4")); // false.
console.log(isValidIsbn13("9-7-8-0-1-3-4-7-5-7-5-9-9")); // true.
