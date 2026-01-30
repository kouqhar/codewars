function isPangram(string) {
  return (
    [...new Set(string.replace(/[\d|\W|\s|_]/gi, "").toLowerCase())].length ===
    26
  );
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
console.log(isPangram("Hello, World!")); // false
