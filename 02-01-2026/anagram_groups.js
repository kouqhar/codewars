function groupAnagrams(words) {
  const anagramGroups = {};

  for (const word of words) {
    const sortedWord = word.split("").sort().join("");

    if (!anagramGroups[sortedWord]) anagramGroups[sortedWord] = [];
    anagramGroups[sortedWord].push(word);
  }

  return Object.values(anagramGroups);
}

console.log(groupAnagrams(["listen", "silent", "hello", "enlist", "world"])); // [["listen", "silent", "enlist"], ["hello"], ["world"]].
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["ate", "eat", "tea"], ["bat"], ["nat", "tan"]].
console.log(
  groupAnagrams([
    "care",
    "race",
    "acre",
    "pots",
    "stop",
    "tops",
    "opts",
    "post",
    "spot",
    "evil",
    "vile",
    "live",
    "veil",
  ]),
); // [["acre", "care", "race"], ["evil", "live", "veil", "vile"], ["opts", "post", "pots", "spot", "stop", "tops"]].
console.log(
  groupAnagrams([
    "algorithms",
    "logarithms",
    "education",
    "cautioned",
    "auctioned",
    "triangle",
    "integral",
    "alerting",
    "relating",
  ]),
); // [["alerting", "integral", "relating", "triangle"], ["algorithms", "logarithms"], ["auctioned", "cautioned", "education"]].
