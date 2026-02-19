## 2026 Winter Games Day 11: Ice Hockey

Given an array of 6 ice hockey teams and their records after the round robin games, determine the match-ups for the semi-final round.

Each array item will have a team and their record in the format "TEAM: W-OTW-OTL-L". Where:

"W" is the number of wins in regulation, worth 3 points each

"OTW" is the number of overtime wins, worth 2 points each

"OTL" is the number of overtime losses, worth 1 point each

"L" is the number of losses, worth 0 points each

For example, "FIN: 2-2-1-0" would have 11 points after adding up their record.

Find the total number of points for each team and return "The semi-final games will be (1st) vs (4th) and (2nd) vs (3rd).". For example, "The semi-final games will be FIN vs SWE and CAN vs USA."

## 2026 Winter Games Day 12: Bobsled

Given an array representing the weights of the athletes on a bobsled team and a number representing the weight of the bobsled, determine whether the team is eligible to race.

The length of the array determines the team size: 1, 2 or 4 person teams.

All given weight values are in kilograms (kg).
The bobsled (sled by iteself) must have a minimum weight of:

162 kg for a 1-person team

170 kg for a 2-person team

210 kg for a 4-person team

The total weight of the bobsled (athletes plus sled) must not exceed:

247 kg for a 1-person team

390 kg for a 2-person team

630 kg for a 4-person team

Return "Eligible" if the team meets all the requirements, or "Not Eligible" if the team fails to meet one or more of the requirements.
