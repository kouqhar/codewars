function capitalize(s) {
  let partialArr = [[], []];

  s.split("").forEach((elem, i) => {
    if (i % 2 === 0) {
      partialArr[0].push(elem.toUpperCase());
      partialArr[1].push(elem.toLowerCase());
    } else {
      partialArr[0].push(elem.toLowerCase());
      partialArr[1].push(elem.toUpperCase());
    }
  });

  return [partialArr[0].join(""), partialArr[1].join("")];
}

console.log(capitalize("abcdef")); // ['Abcdef', 'aBCDEF']
