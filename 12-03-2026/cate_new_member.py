def open_or_senior(data):
    return ['Senior' if member[0] >= 55 and member[1] > 7 else 'Open' for member in data]

print(
  open_or_senior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ]),
); # [ 'Open', 'Senior', 'Open', 'Senior' ])
print(
  open_or_senior([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
  ]),
); # [ 'Open', 'Open', 'Open', 'Open' ])
print(
  open_or_senior([
    [74, 13],
    [73, 26],
    [77, 7],
    [84, 17],
  ]),
); # [ 'Senior', 'Senior', 'Open', 'Senior' ]
