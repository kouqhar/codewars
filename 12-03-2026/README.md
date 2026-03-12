## Domino Chain Validator

Given a 2D array representing a sequence of dominoes, determine whether it forms a valid chain.

Each element in the array represents a domino and will be an array of two numbers from 1 to 6, (inclusive).

For the chain to be valid, the second number of each domino must match the first number of the next domino.

The first number of the first domino and the last number of the last domino don't need to match anything.

## First non-repeating character

Write a function that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input "stress", the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase characters are considered the same character, but the function should return the correct case for the initial character. For example, the input "sTreSS" should return "T".

If a string contains only repeating characters, return an empty string ("");

Note: despite its name in some languages, your function should handle any Unicode codepoint:

"@#@@\*" --> "#"

"かか何" --> "何"

"🐐🦊🐐" --> "🦊"
