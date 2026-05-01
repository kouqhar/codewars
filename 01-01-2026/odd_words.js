function getOddWords(str) {
  return str
    .split(" ")
    .filter((word) => word.length % 2 !== 0)
    .join(" ");
}

console.log(get_odd_words("This is a super good test")); // "a super".
console.log(get_odd_words("one two three four")); // "one two three".
console.log(get_odd_words("banana split sundae with rainbow sprinkles on top")); // "split rainbow sprinkles top".
console.log(get_odd_words("The quick brown fox jumped over the lazy river")); // "The quick brown fox the river".
