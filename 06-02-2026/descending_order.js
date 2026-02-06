const descendingOrder = (n) => {
  let converted = n.toString();

  let nums = [...converted]
    .map((x) => x)
    .sort((a, b) => b - a)
    .join("");

  return Number(nums);
};
