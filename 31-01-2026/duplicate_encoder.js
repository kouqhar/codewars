const duplicateEncode = (word) => {
  let newString = "";

  word = word.toLowerCase() || word;
  word.split("").filter((x, index) => {
    if (word.indexOf(x) !== index) newString += ")";
    else if (word.lastIndexOf(x) !== index) newString += ")";
    else newString += "(";
  });
  return newString;
};

console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
