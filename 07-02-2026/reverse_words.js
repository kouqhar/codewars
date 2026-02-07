const reverseWords = (str) =>
  str
    .split(" ")
    .map((x) => x.split("").reverse().join(""))
    .join(" ");

console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
