const isIsogram = (str) => {
  str = str.toLowerCase().split("");

  return [...new Set(str)].join("").length === str.join("").length;
};

console.log(isIsogram("Dermatoglyphics"));
