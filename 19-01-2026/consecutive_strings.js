function longestConsec(strarr, k) {
  let finalString = "";

  if (!strarr || k <= 0 || k > strarr.length) return finalString;
  else {
    strarr.forEach((item, index) => {
      if (index === strarr.length) return;
      else {
        const concatenated = strarr.slice(index, index + k).join("");
        const concatenatedLength = concatenated.length;
        if (concatenatedLength > finalString.length) finalString = concatenated;
      }
    });
  }
  return finalString;
}
