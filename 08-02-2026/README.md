## Count the Digit

Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k\*\*2.

Implement the function taking n and d as parameters and returning this count.

Examples:

n = 10, d = 1

the k\*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100

We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

The function, when given n = 25 and d = 1 as argument, should return 11 since

the k\*k that contain the digit 1 are:

1, 16, 81, 100, 121, 144, 169, 196, 361, 441.

So there are 11 digits 1 for the squares of numbers between 0 and 25.

Note that 121 has twice the digit 1.

## Sum of a sequence

Your task is to write a function which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

Examples

2,2,2 --> 2

2,6,2 --> 12 (2 + 4 + 6)

1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)

1,5,3 --> 5 (1 + 4)
