function digitalRoot(n) {
  const add = (value) =>
    value
      .toString()
      .split("")
      .reduce((acc, cur) => Number(acc) + Number(cur), 0);

  let result = add(n);

  while (result > 9) result = add(result);

  return result;
}
