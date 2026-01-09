## Persistent Bugger

**Description:**

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

**For example (Input --> Output):**

- 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1\*4 = 4 and 4 has only one digit, there are 3 multiplications)
- 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1\*2 = 2, there are 4 multiplications)
- 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

## Multiplication table

**Description:**

Your task, is to create N×N multiplication table, of size provided in parameter.

**For example, when given size is 3:**

1 2 3
2 4 6
3 6 9

For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]

## IP Validation

**Description:**

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

**Valid inputs examples:**

Examples of valid inputs:
1.2.3.4
123.45.67.89

**Invalid input examples:**
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089

**Notes:**

- Leading zeros (e.g. 01.02.03.04) are considered invalid
- Inputs are guaranteed to be a single string

## Valid Braces

**Description:**
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

**What is considered Valid?**
A string of braces is considered valid if all braces are matched with the correct brace.

**Examples**

- "(){}[]" => True
- "([{}])" => True
- "(}" => False
- "[(])" => False
- "[({})](]" => False
