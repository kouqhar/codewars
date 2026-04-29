function getWordScore(word) {
  // Convert the word to lowercase and set the case unit to 96 (since 'a' has a code point of 97).
  // Dynamically change the case unit based on the first character of the word to handle both uppercase and lowercase letters.

  let [wordCase, caseUnit] = [word.toLowerCase().replace(/\s/g, ""), 96]; // For lower case
  // let [wordCase, caseUnit] = [word.toUpperCase().replace(/\s/g, ""), 64]; // For upper case

  // Method 1:  Solution using a for loop:
  let mth1Score = 0;
  for (let i = 0; i < wordCase.length; i++)
    mth1Score += wordCase.codePointAt(i) - caseUnit;

  return mth1Score;

  // Method 2: Solution using reduce:
  return wordCase
    .split("")
    .reduce((acc, char) => acc + char.codePointAt(0) - caseUnit, 0);

  // Method 3: Solution using forEach:
  let mth2Score = 0;
  wordCase
    .split("")
    .forEach((char) => (mth2Score += char.codePointAt(0) - caseUnit));

  return mth2Score;
}

console.log(getWordScore("hi")); // 17.
console.log(getWordScore("hello")); // 52.
console.log(getWordScore("hippopotamus")); // 169.
console.log(getWordScore("freeCodeCamp")); // 94.
