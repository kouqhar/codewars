function openOrSenior(data) {
  return data.map((elem) => (elem[0] >= 55 && elem[1] > 7 ? "Senior" : "Open"));
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ]),
); // [ 'Open', 'Senior', 'Open', 'Senior' ])
console.log(
  openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
  ]),
); // [ 'Open', 'Open', 'Open', 'Open' ])
console.log(
  openOrSenior([
    [74, 13],
    [73, 26],
    [77, 7],
    [84, 17],
  ]),
); // [ 'Senior', 'Senior', 'Open', 'Senior' ]
