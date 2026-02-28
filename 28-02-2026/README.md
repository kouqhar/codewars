## Blood Type Compatibility

Given a donor blood type and a recipient blood type, determine whether the donor can give blood to the recipient.

Each blood type consists of:

A letter: "A", "B", "AB", or "O"
And an Rh factor: "+" or "-"
Blood types will be one of the valid letters followed by an Rh factor. For example, "AB+" and "O-" are valid blood types.

Letter Rules:

"O" can donate to other letter type.

"A" can donate to "A" and "AB".

"B" can donate to "B" and "AB".

"AB" can donate only to "AB".

Rh Rules:

Negative ("-") can donate to both "-" and "+".

Positive ("+") can donate only to "+".

Both letter and Rh rule must pass for a donor to be able to donate to the recipient.

## Sequential Difference

Given an array of numbers, return a new array containing the value needed to get from each number to the next number.

For the last number, use 0 since there is no next number.
For example, given [1, 2, 4, 7], return [1, 2, 3, 0].
