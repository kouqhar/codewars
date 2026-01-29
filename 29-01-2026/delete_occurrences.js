const deleteNth = (arr, n) => {
  let [numCount, occElem] = [{}, []];

  arr.forEach((num) => {
    if (numCount[num] === undefined) numCount[num] = 0;
    if (numCount[num] === n) return null;
    else {
      occElem.push(num);
      numCount[num] += 1;
    }
  });
  return occElem;
};
