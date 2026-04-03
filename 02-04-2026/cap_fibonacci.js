function capitalizeFibonacci(str) {
  const fibSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

  if (str.length === 0) return str;
  else if (fibSequence.at(-1) >= str.length)
    return capitalizeFibonacciIndex(str, fibSequence);
  else {
    const fibSeq = generateFibonacciSequence(str);
    return capitalizeFibonacciIndex(str, fibSeq);
  }
}

const generateFibonacciSequence = (str, sequence = [0, 1]) => {
  while (sequence[sequence.length - 1] < str.length) {
    const nextFib =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextFib);
  }
  return sequence;
};

const capitalizeFibonacciIndex = (str = "", fibSequence = [0, 1]) => {
  let [strLength, newStr] = [str.length, ""];
  for (let i = 0; i < strLength; i++) {
    if (fibSequence.includes(i)) newStr += str[i].toUpperCase();
    else newStr += str[i].toLowerCase() || str[i];
  }
  return newStr;
};

console.log(capitalizeFibonacci("hello world")); // "HELLo woRld".
console.log(capitalizeFibonacci("HELLO WORLD")); // "HELLo woRld".
console.log(capitalizeFibonacci("hello, world!")); // "HELLo, wOrld!".
console.log(
  capitalizeFibonacci("The quick brown fox jumped over the lazy dog."),
); // "THE qUicK broWn fox jUmped over thE lazy dog.".
console.log(
  capitalizeFibonacci(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar ex nibh, vel ullamcorper ligula egestas quis. Integer tincidunt fringilla accumsan. Integer et metus placerat, gravida felis at, pellentesque nisl.",
  ),
); // "LOREm ipSum dOlor sit amet, consecTetur adipiscing elit. proin pulvinar ex nibh, vel ullaMcorper ligula egestas quis. integer tincidunt fringillA accumsan. integer et metus placerat, gravida felis at, pellentesque nisl.".
