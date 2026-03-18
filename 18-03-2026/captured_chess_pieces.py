import re

def get_captured_value(pieces):
    total, piecesString = 0, "".join(pieces)
    
    if not "K" in piecesString: 
        return "Checkmate";

    board = [
        ["P", 8, 1],
        ["R", 2, 5],
        ["N", 2, 3],
        ["B", 2, 3],
        ["Q", 1, 9],
        ["K", 1, 0],
    ]

    for i in range(len(board)):
        abbr, quantity, value = board[i];
        matchPieces = re.findall(abbr, piecesString)
        total += (quantity - len(matchPieces)) * value if matchPieces else quantity * value;

    return total


print(get_captured_value(["P", "P", "P", "P", "P", "P", "R", "R", "N", "B", "Q", "K"])) # 8
print(get_captured_value(["P", "P", "P", "P", "P", "R", "B", "K"])) # 26
print(get_captured_value(["K", "P", "P", "N", "P", "P", "R", "P", "B", "P", "N", "B"])) # 16
print(get_captured_value([
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
])) # 4
print(get_captured_value(["P", "K"])) # 38
print(get_captured_value([
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
])) # 0
print(get_captured_value(["N", "P", "P", "B", "P", "R", "Q", "P", "P", "P", "B"])) # "Checkmate"
