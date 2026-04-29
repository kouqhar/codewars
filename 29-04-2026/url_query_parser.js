function parseUrlQuery(url) {
  let [query_string, result] = [url.split("?")[1].split("&") || [], {}];

  for (let pair of query_string) {
    let [key, value] = pair.split("=");
    result[key] = value;
  }

  return result;
}

console.log(parseUrlQuery("https://example.com/search?name=Alice&age=30")); // {"name": "Alice", "age": "30"}
console.log(
  parseUrlQuery(
    "https://freecodecamp.org/learn?skill=programming&language=python",
  ),
); // {"skill": "programming", "language": "python"}
console.log(
  parseUrlQuery(
    "https://freecodecamp.org/items?category=books&sort=asc&page=2",
  ),
); // {"category": "books", "sort": "asc", "page": "2"}
console.log(
  parseUrlQuery("https://example.com?redirect=freecodecamp.org/learn&when=now"),
); // {"redirect": "freecodecamp.org/learn", "when": "now"}
