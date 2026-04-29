## URL Query Parser

Given a URL that contains a query string, parse the query string into an object (or dictionary) of key-value pairs.

The query string begins after the "?",

each parameter is separated by "&",

each key/value pair is separated by "="

For example, given "https://example.com/search?name=Alice&age=30", return:

{
  "name": "Alice",
  "age": "30"
}

All values should be returned as strings.