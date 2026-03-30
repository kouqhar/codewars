## Truncate the Text 2

Given a string, return a new string that is truncated so that the total width of the characters does not exceed 50 units.

Each character has a specific width:

| "Letters"                  | "Width" |
| -------------------------- | ------- |
| "ilI"                      | "1"     |
| "fjrt"                     | "2"     |
| "abcdeghkmnopqrstuvwxyzJL" | "3"     |
| "ABCDEFGHKMNOPQRSTUVWXYZ"  | "4"     |

> The table above includes all upper and lower case letters. Additionally:

- Spaces (" ") have a width of 2

- Periods (".") have a width of 1

- If the given string is 50 units or less, return the string as-is, otherwise

- Truncate the string and add three periods at the end ("...") so it's total width, including the three periods, is as close as possible to 50 units without going over.

## ISBN-10 Validator

Given a string, determine if it's a valid ISBN-10.

An ISBN-10 consists of hyphens ("-") and 10 other characters. After removing the hyphens ("-"):

The first 9 characters must be digits, and

The final character may be a digit or the letter "X", which represents the number 10.
To validate it:

Multiply each digit (or value) by its position (multiply the first digit by 1, the second by 2, and so on).

Add all the results together.

If the total is divisible by 11, it's valid.
