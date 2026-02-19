function avalancheRisk(snowDepth, slope) {
  const lookupTable = {
    Shallow: {
      Steep: "Safe",
      "Very Steep": "Safe",
    },
    Moderate: {
      Steep: "Risky",
      "Very Steep": "Risky",
    },
    Deep: {
      Steep: "Risky",
      "Very Steep": "Risky",
    },
  };

  return slope == "Gentle" ? "Safe" : lookupTable[snowDepth][slope];
}

console.log(avalancheRisk("Shallow", "Gentle")); // Safe
console.log(avalancheRisk("Moderate", "Steep")); // Risky
console.log(avalancheRisk("Deep", "Very Steep")); // Risky
