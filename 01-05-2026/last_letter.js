function getLastLetter(str) {
  const letters = str.match(/[a-zA-Z]/g);
  const letters_lower = letters.join("").toLowerCase();
  const char_code = letters_lower.split("").map((char) => char.charCodeAt(0));
  const max_index = char_code.indexOf(Math.max(...char_code));

  return letters[max_index];
}

console.log(get_last_letter("world")); // "w".
console.log(get_last_letter("Hello World")); // "W".
console.log(get_last_letter("The quick brown fox jumped over the lazy dog.")); // "z".
console.log(get_last_letter("HeLl0")); // "L".
console.log(get_last_letter("!#$ er@R asd fT.,> 2t0e9")); // "T".
