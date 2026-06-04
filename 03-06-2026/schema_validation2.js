function isValidSchema(obj) {
  const isValidProp = (obj, key, expected_type) =>
    obj.hasOwnProperty(key) && typeof obj[key] === expected_type;

  const requiredProps = [
    ["username", "string"],
    ["posts", "number"],
    ["verified", "boolean"],
  ].map(([key, type]) => isValidProp(obj, key, type));

  return requiredProps.every((elm) => elm);
}

console.log(isValidSchema({ username: "alice", posts: 10, verified: false })); // true.
console.log(
  isValidSchema({
    username: "carol",
    posts: 15,
    verified: true,
    followers: 25,
  }),
); // true.
console.log(isValidSchema({ username: "frank", posts: "21", verified: true })); // false.
console.log(isValidSchema({ username: "sam", posts: 17, verified: "false" })); // false.
console.log(isValidSchema({ username: "bill", verified: true })); // false.
console.log(isValidSchema({ username: "fred", verified: true })); // false.
console.log(isValidSchema({ username: 5, posts: 10, verified: true })); // false.
