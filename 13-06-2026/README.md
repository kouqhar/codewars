## Zoning Regulations

Given a 2D grid (array of arrays) representing a city's building layout, return the coordinates of all buildings that are violating zoning rules.

Each cell in the grid contains one of the labels from the table below. A building is in violation if any of its (up to) 4 neighbors, horizontal or vertical, are a type it cannot be adjacent to.

|Label|Type                        |Cannot be adjacent to|
|---  |---                          |---:                |
|"i"  |	industrial                  |	"R", "I"         |
|"A"  |	Agricultural                |	"C"              |
|"R"  |	Residential                 |	"i", "C"         |
|"I"  |	Institutional               |	"i"              |
|"C"  |	Commercial                  |	"R", "A"         |
|""   | (empty string)	undeveloped	| no restrictions    |

Return the coordinates of all violating cells as an array of [row, col] pairs, in any order. If no violations exist, return an empty array.

