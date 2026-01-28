function minMax(arr) {
  const reOrder = arr.sort((a, b) => a - b);
  return [reOrder[0], reOrder[reOrder.length - 1]];
}
