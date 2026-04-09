function getBrowserHistory(commands) {
  let [previous, next] = [[], []];

  for (const command of commands) {
    if (command === "Back") {
      if (previous.length > 0) {
        next.push(previous.pop());
      }
    } else if (command === "Forward") {
      if (next.length > 0) {
        previous.push(next.pop());
      }
    } else {
      previous.push(command);
    }
  }

  return [
    ...previous,
    // ...[next.length > 1 ? next.slice(1) : next.slice(0)],
    previous.length - 1,
  ];
}

console.log(
  getBrowserHistory(["freecodecamp.org", "freecodecamp.org/learn", "Back"]),
); // [["freecodecamp.org", "freecodecamp.org/learn"], 0].
console.log(
  getBrowserHistory([
    "example.com",
    "example.com/about",
    "example.com/contact",
    "example.com/blog",
  ]),
); // [["example.com", "example.com/about", "example.com/contact", "example.com/blog"], 3].
console.log(
  getBrowserHistory([
    "example.com",
    "example.com/about",
    "Back",
    "example.com/contact",
    "example.com/blog",
    "Back",
    "Back",
    "Forward",
  ]),
); // [["example.com", "example.com/contact", "example.com/blog"], 1].
console.log(
  getBrowserHistory([
    "example.com",
    "example.com/about",
    "example.com/contact",
    "example.com/blog",
    "Back",
    "Back",
    "Forward",
    "freecodecamp.org",
  ]),
); // [["example.com", "example.com/about", "example.com/contact", "freecodecamp.org"], 3].
console.log(
  getBrowserHistory(["example.com", "example.com/about", "Back", "Back"]),
); // [["example.com", "example.com/about"], 0].
console.log(getBrowserHistory(["example.com", "example.com/about", "Forward"])); // [["example.com", "example.com/about"], 1].
