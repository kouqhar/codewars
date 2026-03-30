function truncateText(str) {
  let numStr = str
    .replace(/[ilI\.]/g, 1)
    .replace(/[fjrt\s]/g, 2)
    .replace(/[a-zJL]/g, 3)
    .replace(/[A-Z]/g, 4)
    ?.split("")
    ?.map(Number);

  let count = 0;
  for (let i = 0; i < numStr.length || 0; i++) {
    count += numStr[i];

    const nextCount = count + (numStr[i + 1] || 0);

    if (nextCount <= 50 && numStr[i + 1] == undefined) return str;
    if (nextCount + 3 > 50 && numStr[i + 1] != undefined)
      return str.slice(0, i + 1) + "...";
  }
}

console.log(truncateText("The quick brown fox")); // "The quick brown f..."
console.log(truncateText("The silky smooth sloth")); // "The silky smooth s..."
console.log(truncateText("THE LOUD BRIGHT BIRD")); // "THE LOUD BRIG..."
console.log(truncateText("The fast striped zebra")); // "The fast striped z..."
console.log(truncateText("The big black bear")); // "The big black bear"
