function order(words) {
  let finalString = "",
    index = 0,
    splitWords = words.split(" ");
  while (index !== splitWords.length) {
    splitWords.forEach((word) => {
      if (word.includes(index + 1)) finalString += `${word} `;
    });
    index++;
  }
  return finalString.trim();
}
