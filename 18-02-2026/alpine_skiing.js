function getHillRating(drop, distance, type) {
  const steepness = drop / distance;
  const hillType =
    type == "Downhill"
      ? steepness * 1.2
      : type == "Slalom"
        ? steepness * 0.9
        : steepness * 1.0;

  return hillType <= 0.1 ? "Green" : hillType > 0.25 ? "Black" : "Blue";
}

getHillRating(95, 900, "Slalom"); // "Green"
getHillRating(620, 2800, "Downhill"); // "Black"
getHillRating(110, 900, "Slalom"); // "Blue"
