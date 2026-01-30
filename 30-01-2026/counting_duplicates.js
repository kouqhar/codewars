function duplicateCount(text) {
  let duplicateArr = {},
    splitText = text.toLowerCase().split("");

  splitText.forEach((letter) => {
    if (duplicateArr.hasOwnProperty(letter)) duplicateArr[letter] += 1;
    else duplicateArr[letter] = 0;
  });

  const duplicateCount = Object.values(duplicateArr)
    .toString()
    .match(/[1-9]/gm);
  return duplicateCount !== null ? duplicateCount.length : 0;
}
