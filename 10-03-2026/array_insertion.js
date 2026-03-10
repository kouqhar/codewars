function insertIntoArray(arr, value, index) {
  // The toSpliced() method of Array instances is the copying version of the splice() method. It returns a new array with some elements removed and/or replaced at a given index.
  return arr.toSpliced(index, 0, value) || arr;
}

console.log(insertIntoArray([2, 4, 8, 10], 6, 2)); // [2, 4, 6, 8, 10].
console.log(insertIntoArray(["the", "quick", "fox"], "brown", 2)); // ["the", "quick", "brown", "fox"].
console.log(insertIntoArray([], 0, 0)); // [0].
console.log(insertIntoArray([0, 1, 1, 2, 3, 8, 13], 5, 5)); // [0, 1, 1, 2, 3, 5, 8, 13].
