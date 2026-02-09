const findNextSquare = (sq) => {
  let squareRoot = Math.sqrt(sq);

  return squareRoot - Math.floor(squareRoot) !== 0 ? -1 : (squareRoot + 1) ** 2;
};
