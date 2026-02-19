def avalanche_risk(snow_depth, slope):
    
  lookupTable = {
    "Shallow": {
      "Steep": "Safe",
      "Very Steep": "Safe",
    },
    "Moderate": {
      "Steep": "Risky",
      "Very Steep": "Risky",
    },
    "Deep": {
      "Steep": "Risky",
      "Very Steep": "Risky",
    },
  };

  return "Safe" if slope == "Gentle" else lookupTable[snow_depth][slope];


print(avalanche_risk("Shallow", "Gentle")); # Safe
print(avalanche_risk("Moderate", "Steep")); # Risky
print(avalanche_risk("Deep", "Very Steep")); # Risky