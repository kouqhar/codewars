function inArray(array1, array2) {
  return [...new Set(array1)]
    .filter((elem) => array2.some((elm) => elm.includes(elem)))
    .sort();
}
