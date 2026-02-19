def get_semifinal_matchups(teams):

    pointsLog = []

    for i in range(len(teams)):
        team, record = teams[i].split(": ")
        W, OTW, OTL, L = record.split("-") or [0, 0, 0, 0]
        totalPoint = int(W) * 3 + int(OTW) * 2 + int(OTL) * 1 + int(L) * 0
        pointsLog.append((team, totalPoint))

    sortedPointsLog = sorted(pointsLog, key=lambda x: x[1], reverse=True)

    return f"The semi-final games will be {sortedPointsLog[0][0]} vs {sortedPointsLog[3][0]} and {sortedPointsLog[1][0]} vs {sortedPointsLog[2][0]}."

print(get_semifinal_matchups(["CAN: 2-2-0-1", "FIN: 2-2-1-0", "GER: 1-0-1-3", "SUI: 0-1-3-1", "SWE: 1-1-2-1", "USA: 2-1-0-2"])) ## "The semi-final games will be FIN vs SWE and CAN vs USA."
print(get_semifinal_matchups(["CAN: 2-1-1-1", "CZE: 1-1-1-2", "FIN: 1-2-1-1", "NOR: 0-1-1-3", "SLO: 1-0-1-3", "USA: 5-0-0-0"])) ## "The semi-final games will be USA vs CZE and CAN vs FIN."