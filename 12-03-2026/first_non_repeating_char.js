function firstNonRepeatingLetter(s) {
  if (s.length < 2) return s || "";

  let [sameLengthArr, isInValid, uniqueChars] = [
    [],
    true,
    [...new Set(s.split(""))],
  ];

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  for (let i = 0; i < uniqueChars.length; i++) {
    const escapedChar = escapeRegExp(uniqueChars[i]);
    const searchResult = s.match(new RegExp(`${escapedChar}`, "gi"));
    sameLengthArr.push(searchResult.length);

    if (searchResult.length !== sameLengthArr[0]) {
      isInValid = false;
      break;
    }
  }

  const isSame = sameLengthArr.every((num) => num === 1);
  if (isSame) return s[0];

  if (isInValid) return "";
  else {
    let count = ["", 0, Infinity];

    for (let i = 0; i < s.length; i++) {
      const escapedChar = escapeRegExp(s[i]);
      const searchResult = s.match(new RegExp(`${escapedChar}`, "gi"));
      const searchResultLength = searchResult.length;
      if (searchResultLength < count[2]) count = [s[i], i, searchResultLength];
    }

    return count[0];
  }
}

console.log(firstNonRepeatingLetter("a")); // 'a'
console.log(firstNonRepeatingLetter("stress")); // 't'
console.log(firstNonRepeatingLetter("moonmen")); // 'e'
console.log(firstNonRepeatingLetter("")); // ''
console.log(firstNonRepeatingLetter("abba")); // ''
console.log(firstNonRepeatingLetter("sTreSS")); // 'T'
console.log(firstNonRepeatingLetter("i%(NiWDwobqdlWqWNw{iib(boD~%d!"));
console.log(firstNonRepeatingLetter("#/y"));
console.log(
  firstNonRepeatingLetter(".;~vpL_}Ii+ZN/gH~zq`!vz/;~Y.ZKiLhNg_4+9p}\"H'I~"),
);
