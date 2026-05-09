const clearDigits = (s) => {
  const chars = [];

  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) chars.push(s[i]);
    else chars.pop();
  }
  return chars.join("");
};

console.log(clearDigits("abc")); // abc
console.log(clearDigits("a1b2c3")); // ''
console.log(clearDigits("cba34")); // 'c'
