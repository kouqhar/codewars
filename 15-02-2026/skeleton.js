function getDifficulty(track) {
  let points = 0;

  track.split("").forEach((elem, idx) => {
    const nextElem = track[idx + 1];
    if (nextElem) {
      if ((elem == "L" && nextElem == "R") || (elem == "R" && nextElem == "L"))
        points += 15;
      else if (elem == "L" || elem == "R") points += 5;
      else points += 0;
    } else return;
  });

  return points <= 100 ? "Easy" : points <= 200 ? "Medium" : "Hard";
}

console.log(getDifficulty("SLSLLSRRLSRLRL")); // Easy
console.log(getDifficulty("SRRRRLSLLRLRSSRLSRL")); // Medium
console.log(getDifficulty("LLRSLRLRSLLRLRSLRRLRSRLLS")); // Hard
