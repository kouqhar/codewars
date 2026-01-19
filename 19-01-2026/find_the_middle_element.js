function gimme(triplet) {
  const sortBetween = [...triplet].sort((a, b) => a - b)[1];
  return triplet.indexOf(sortBetween);
}
