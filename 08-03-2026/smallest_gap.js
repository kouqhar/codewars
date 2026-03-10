function smallestGap(str) {
  let [gap, strSet, strSplit] = [["", Infinity], {}, str.split(" ")];

  for (let i = 0; i < str.length; i++) {
    if (strSplit.length > 2) {
      for (let j = 1; j < strSplit.length - 1; j++)
        if (strSplit[j].length < gap[1])
          gap = [strSplit[j], strSplit[j].length];
    } else if (strSet[str[i]] == undefined) strSet[str[i]] = i;
    else {
      const strSlice = str.slice(strSet[str[i]] + 1, i);
      strSlice.length < gap[1] ? (gap = [strSlice, strSlice.length]) : gap;
    }
  }

  return gap[0];
}

console.log(smallestGap("ABCDAC")); // "DA"
console.log(smallestGap("racecar")); // "e"
console.log(smallestGap("A{5e^SD*F4i!o#q6e&rkf(po8|we9+kr-2!3}=4")); // "#q6e&rkf(p"
console.log(smallestGap("Hello World")); // ""
console.log(smallestGap("The quick brown fox jumps over the lazy dog.")); // "fox"
