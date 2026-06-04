function isValidSchema(obj) {
  const ROLES = ["user", "creator", "moderator", "staff", "admin"];
  const SCHEMA = [
    ["username", "string"],
    ["posts", "number"],
    ["verified", "boolean"],
    ["role", "string"],
    ["supporter", "boolean", true],
  ];
  const isValidProp = (obj, key, expected_type, optional = false) =>
    optional
      ? obj.hasOwnProperty(key)
        ? typeof obj[key] === expected_type
        : true
      : obj.hasOwnProperty(key) && typeof obj[key] === expected_type;

  const hasValidRole = ROLES.includes(obj.role);
  const requiredProps = SCHEMA.map(([key, type, optional]) =>
    isValidProp(obj, key, type, optional),
  );

  return requiredProps.concat([hasValidRole]).every((elm) => elm);
}

console.log(
  isValidSchema({
    username: "vivian",
    posts: 1,
    verified: false,
    role: "user",
    supporter: true,
  }),
); // true.
console.log(
  isValidSchema({
    username: "rudolph",
    posts: 15,
    verified: true,
    role: "creator",
  }),
); // true.
console.log(
  isValidSchema({
    username: "hernandez",
    posts: 35,
    verified: true,
    role: "moderator",
    supporter: false,
    followers: 55,
  }),
); // true.
console.log(
  isValidSchema({
    username: "julia",
    posts: 50,
    verified: true,
    role: "admin",
    supporter: "true",
  }),
); // false.
console.log(
  isValidSchema({
    username: "bernard",
    posts: 0,
    verified: true,
    role: "friend",
    supporter: true,
  }),
); // false.
console.log(
  isValidSchema({
    username: "felix",
    posts: 40,
    verified: "yes",
    role: "staff",
    supporter: false,
  }),
); // false.
console.log(
  isValidSchema({
    username: "jimmy",
    posts: true,
    verified: false,
    role: "creator",
    supporter: true,
  }),
); // false.
console.log(
  isValidSchema({
    username: true,
    posts: 30,
    verified: true,
    role: "moderator",
    supporter: false,
  }),
); // false.
