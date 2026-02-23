function mirror(str) {
  return `${str}${str.split("").reverse().join("")}`;
}

console.log(mirror("The quick brown fox...")); // "The quick brown fox... ...xof nworb kciuq ehT"
console.log(mirror("helloworld")); // "helloworlddlrowolleh"
console.log(mirror("RaceCar")); // "RaceCarraCecaR"
console.log(mirror("freeCodeCamp")); // "freeCodeCamppmaCedoCeerf"
