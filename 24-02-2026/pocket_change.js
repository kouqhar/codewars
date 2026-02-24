function countChange(change) {
  const sum = change.reduce((acc, val) => acc + val, 0);
  const [dollars, cents] = [Math.floor(sum / 100), sum % 100];

  return `$${dollars}.${cents.toString().padStart(2, "0")}`;
}

console.log(countChange([25, 10, 5, 1, 25, 10, 25, 1, 1, 10, 5, 25])); // "$1.43"
console.log(countChange([100, 25, 100, 1000, 5, 500, 2000, 25])); // "$37.55"
console.log(countChange([1])); // "$0.01"
console.log(countChange([25, 25, 25, 25])); // "$1.00"
console.log(countChange([10, 5, 1, 10, 1, 25, 1, 1, 5, 1, 10])); // "$0.70"
