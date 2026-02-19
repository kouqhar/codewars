function getSemifinalMatchups(teams) {
  let semifinalMatchups = [];

  teams.forEach((team) => {
    const [teamName, score] = team.split(":");
    const [W, OTW, OTL, L] = score.split("-") || [0, 0, 0, 0];
    const points = W * 3 + OTW * 2 + OTL * 1;
    semifinalMatchups.push([teamName, points]);
  });

  semifinalMatchups.sort((a, b) => b[1] - a[1]);

  return `The semi-final games will be ${semifinalMatchups[0][0]} vs ${semifinalMatchups[3][0]} and ${semifinalMatchups[1][0]} vs ${semifinalMatchups[2][0]}.`;
}

console.log(
  getSemifinalMatchups([
    "CAN: 2-2-0-1",
    "FIN: 2-2-1-0",
    "GER: 1-0-1-3",
    "SUI: 0-1-3-1",
    "SWE: 1-1-2-1",
    "USA: 2-1-0-2",
  ]),
); // "The semi-final games will be FIN vs SWE and CAN vs USA."
console.log(
  getSemifinalMatchups([
    "CAN: 2-1-1-1",
    "CZE: 1-1-1-2",
    "FIN: 1-2-1-1",
    "NOR: 0-1-1-3",
    "SLO: 1-0-1-3",
    "USA: 5-0-0-0",
  ]),
); // "The semi-final games will be USA vs CZE and CAN vs FIN."
