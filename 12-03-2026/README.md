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

## Categorize New Member

The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input

Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output

Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example

input = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]

output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
