function countLettersAndNumbers(str) {
  const [allLetters, allNumbers] = [
    str.match(/[a-zA-Z]/gi)?.length || 0,
    str.match(/\d/g)?.length || 0,
  ];

  return `The string has ${allLetters} letter${allLetters !== 1 ? "s" : ""} and ${allNumbers} number${allNumbers !== 1 ? "s" : ""}.`;
}

console.log(countLettersAndNumbers("password")); // "The string has 8 letters and 0 numbers."
console.log(countLettersAndNumbers("12345")); // "The string has 0 letters and 5 numbers."
console.log(countLettersAndNumbers("A1!")); // "The string has 1 letter and 1 number."
console.log(countLettersAndNumbers("Catch 22")); // "The string has 5 letters and 2 numbers."
console.log(countLettersAndNumbers("helloworld123")); // "The string has 10 letters and 3 numbers."
