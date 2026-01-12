function removeSmallest(numbers) {
  const indexOfLowest = numbers.indexOf(Math.min(...numbers));
  const new_list = [];

  numbers.map((num, index) => {
    if (index === indexOfLowest) return;
    else new_list.push(num);
  });

  return !numbers ? [] : new_list;
}
