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

## Credit Card Validator

Given a string of digits for a credit card number, determine if it's a valid card number using the following method:

Starting from the second-to-last digit, double every other digit moving left.

If doubling a digit results in a number greater than 9, subtract 9.

Sum all the digits (doubled and undoubled).

If the total is divisible by 10, the number is valid.

## Number Sort

Given a string of numbers separated by commas, return an array of the numbers sorted from smallest to largest.