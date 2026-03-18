function getCapturedValue(pieces) {
  let [total, piecesString] = [0, pieces.join("")];

  if (!piecesString.includes("K")) return "Checkmate";

  [
    ["P", 8, 1],
    ["R", 2, 5],
    ["N", 2, 3],
    ["B", 2, 3],
    ["Q", 1, 9],
    ["K", 1, 0],
  ].forEach((piece) => {
    const [abbr, quantity, value] = piece;
    const matchPieces = piecesString.match(new RegExp(`${abbr}`, "gi"));
    total += matchPieces
      ? (quantity - matchPieces.length) * value
      : quantity * value;
  });

  console.log("Total : ", total);
  return total;
}

getCapturedValue(["P", "P", "P", "P", "P", "P", "R", "R", "N", "B", "Q", "K"]); // 8
getCapturedValue(["P", "P", "P", "P", "P", "R", "B", "K"]); // 26
getCapturedValue(["K", "P", "P", "N", "P", "P", "R", "P", "B", "P", "N", "B"]); // 16
getCapturedValue([
  "P",
  "Q",
  "N",
  "P",
  "P",
  "B",
  "K",
  "P",
  "R",
  "R",
  "P",
  "P",
  "B",
  "P",
]); // 4
getCapturedValue(["P", "K"]); // 38
getCapturedValue([
  "N",
  "P",
  "P",
  "B",
  "K",
  "P",
  "Q",
  "N",
  "P",
  "P",
  "R",
  "R",
  "P",
  "P",
  "P",
  "B",
]); // 0
getCapturedValue(["N", "P", "P", "B", "P", "R", "Q", "P", "P", "P", "B"]); // "Checkmate"
