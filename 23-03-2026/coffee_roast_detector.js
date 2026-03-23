function detectRoast(beans) {
  const apos = beans.match(/\'/g)?.length || 0;
  const dash = (beans.match(/\-/g)?.length || 0) * 2;
  const dot = (beans.match(/\./g)?.length || 0) * 3;
  const total = (apos + dash + dot) / beans.length;

  return total < 1.75
    ? "Light"
    : total <= 2.5 && total >= 1.75
      ? "Medium"
      : "Dark";
}

console.log(detectRoast("''-''''''-'-''--''''")); // "Light".
console.log(detectRoast(".'-''-''..'''.-.-''-")); // "Medium".
console.log(detectRoast("--.''--'-''.--..-.--")); // "Medium".
console.log(detectRoast("-...'-......-..-...-")); // "Dark".
console.log(detectRoast(".--.-..-......----.'")); // "Medium".
console.log(detectRoast("..-..-..-..-....-.-.")); // "Dark".
console.log(detectRoast("-'-''''''..-'.''-'.'")); // "Light".
