function sortAndSwap(arr) {
  const [sorted, swapped] = [arr.sort((a, b) => a - b), []];

  for (let i = 0; i < sorted.length; i++) {
    if (i % 3 === 0 && i - 1 >= 0) swapped.splice(i - 1, 0, sorted[i]);
    else swapped.push(sorted[i]);
  }

  return swapped;
}

console.log(sortAndSwap([3, 1, 2, 4, 6, 5])); // [1, 2, 4, 3, 5, 6].
console.log(sortAndSwap([9, 7, 5, 3, 1, 2, 4, 6, 8])); // [1, 2, 4, 3, 5, 7, 6, 8, 9].
console.log(sortAndSwap([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [1, 2, 4, 3, 5, 7, 6, 8, 9].
console.log(sortAndSwap([12, 5, 8, 1, 3, 10, 2, 7, 6, 4, 9, 11])); // [1, 2, 4, 3, 5, 7, 6, 8, 10, 9, 11, 12].
console.log(sortAndSwap([100, -50, 0, 75, -25, 50, -75, 25])); // [-75, -50, 0, -25, 25, 75, 50, 100].
console.log(
  sortAndSwap([5, 9, 13, 77, 88, 313, -10, -65, 0, 8, 99, 101, -4, 2]),
); // [-65, -10, 0, -4, 2, 8, 5, 9, 77, 13, 88, 101, 99, 313].
