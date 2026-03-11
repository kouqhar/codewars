function convertWords(str) {
  return str
    .split(" ")
    .map((word) => word.length)
    .join(" ");
}

console.log(convertWords("hello world")); // "5 5".
console.log(convertWords("Thanks and happy coding")); // "6 3 5 6".
console.log(convertWords("The quick brown fox jumps over the lazy dog")); // "3 5 5 3 5 4 3 4 3".
console.log(
  convertWords(
    "Lorem ipsum dolor sit amet consectetur adipiscing elit donec ut ligula vehicula iaculis orci vel semper nisl",
  ),
); // "5 5 5 3 4 11 10 4 5 2 6 8 7 4 3 6 4".
