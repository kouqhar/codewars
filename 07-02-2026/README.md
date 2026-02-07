## Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true

"aba" --> false

"moOse" --> false (ignore letter case)

## Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true

XO("xooxx") => false

XO("ooxXm") => true

XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true

XO("zzoo") => false

## Testing 1-2-3

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []

["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
