function stockList(listOfArt, listOfCat) {
  const [partialObj, finalArr] = [{}, []];

  if (listOfArt.length < 1 || listOfCat < 1) return "";
  else {
    listOfArt.forEach((elem) => {
      const [letter, num] = elem.split(" ");
      const char = letter.charAt(0);

      partialObj[char]
        ? (partialObj[char] += Number(num))
        : (partialObj[char] = Number(num));
    });

    listOfCat.forEach((elem) =>
      partialObj[elem]
        ? finalArr.push(`(${elem} : ${partialObj[elem]})`)
        : finalArr.push(`(${elem} : 0)`)
    );

    return finalArr.join(" - ");
  }
}
