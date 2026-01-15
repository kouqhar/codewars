function nbYear(p0, percent, aug, p) {
  let years = [p0];
  let i = years.at(-1);

  while (i < p) {
    const [lastIndex, convertedPercent] = [years.at(-1), percent / 100];
    const inhabitants = Math.floor(
      lastIndex + lastIndex * convertedPercent + aug
    );

    if (lastIndex >= p)
      return (
        years.length - 1
      ); // Subtract 1, cause youve added the latest inhabitants number
    else {
      i++;
      i = lastIndex;
    }

    years.push(inhabitants);
  }
}
