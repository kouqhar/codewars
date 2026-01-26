let isAnagram = (test, original) => {
  if (test.length !== original.length) return false;
  else {
    test = test.toLowerCase().split("").sort().join("");
    original = original.toLowerCase().split("").sort().join("");
    return original === test;
  }
};
