function isValidSchema(obj) {
  return obj.hasOwnProperty("username") && typeof obj["username"] === "string";
}

console.log(isValidSchema({ username: "bob" })); // true.
console.log(isValidSchema({ username: "jen", posts: 30 })); // true.
console.log(isValidSchema({ username: "" })); // true.
console.log(isValidSchema({ username: 7 })); // false.
console.log(isValidSchema({ posts: 25 })); // false.
