function isValidSchema(obj) {
  const ROLES = ["user", "creator", "moderator", "staff", "admin"];
  const isValidProp = (obj, key, expected_type) =>
    obj.hasOwnProperty(key) && typeof obj[key] === expected_type;

  const requiredProps = [
    ["username", "string"],
    ["posts", "number"],
    ["verified", "boolean"],
  ].map(([key, type]) => isValidProp(obj, key, type));

  const hasValidRole = ROLES.includes(obj.role);

  return requiredProps.concat([hasValidRole]).every((elm) => elm);
}

console.log(
  isValidSchema({ username: "henry", posts: 0, verified: true, role: "staff" }),
); // true.
console.log(
  isValidSchema({
    username: "sara",
    posts: 45,
    verified: false,
    role: "creator",
    followers: 70,
  }),
); // true.
console.log(
  isValidSchema({
    username: "penelope",
    posts: 20,
    verified: true,
    role: "admin",
  }),
); // true.
console.log(
  isValidSchema({ username: "kevin", posts: 0, verified: false, role: "user" }),
); // true.
console.log(
  isValidSchema({
    username: "george",
    posts: 15,
    verified: true,
    role: "moderator",
  }),
); // true.
console.log(
  isValidSchema({
    username: "david",
    posts: 0,
    verified: false,
    role: "guest",
  }),
); // false.
console.log(isValidSchema({ username: "wendy", posts: 10, verified: true })); // false.
console.log(
  isValidSchema({ username: "fabian", posts: 1, verified: true, role: true }),
); // false.
console.log(
  isValidSchema({ username: 8, posts: 1, verified: true, role: "user" }),
); // false.
console.log(
  isValidSchema({
    username: "penny",
    posts: "10",
    verified: true,
    role: "staff",
  }),
); // false.
console.log(
  isValidSchema({
    username: "john",
    posts: "1",
    verified: "true",
    role: "admin",
  }),
); // false.
