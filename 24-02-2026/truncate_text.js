const truncateText = (text) =>
  text.length <= 20 ? text : text.slice(0, 17) + "...";

console.log(
  truncateText("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
); // "Lorem ipsum dolor..."
console.log(truncateText("Exactly twenty chars")); // "Exactly twenty chars"
console.log(truncateText("This string should get truncated.")); // "This string should..."
