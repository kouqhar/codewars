function cardValues(cards) {
  return cards.map((card) =>
    Number(
      card
        .replace(/[SCDH]/gi, "")
        .replace(/[JQK]/gi, "10")
        .replace(/[A]/gi, "1"),
    ),
  );
}

console.log(cardValues(["AS", "KS"])); // [1, 10].
console.log(cardValues(["3H", "4D", "5S"])); // [3, 4, 5].
console.log(cardValues(["AS", "10S", "10H", "6D", "7D"])); // [1, 10, 10, 6, 7].
console.log(cardValues(["8D", "QS", "2H", "JC", "9C"])); // [8, 10, 2, 10, 9].
console.log(cardValues(["10H", "JH", "QH", "KH", "AH"])); // [10, 10, 10, 10, 1].
