const comp = (array1, array2) => {
  if ([array1, array2].includes(null)) return false;
  array1 = array1.map((array) => array ** 2).sort((a, b) => a - b);

  return array2
    .sort((a, b) => a - b)
    .every((elem, idx) => elem === array1[idx]);
};

a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];

console.log(comp(a, b));
