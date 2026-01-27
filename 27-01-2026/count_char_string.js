function count(string) {
  let finalObj = {};
  string
    .split("")
    .forEach((elem) =>
      finalObj[elem] !== undefined
        ? (finalObj[elem] += 1)
        : (finalObj[elem] = 1),
    );
  return finalObj;
}
