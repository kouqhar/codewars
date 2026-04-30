## Word Decompressor

Given a compressed string, return the decompressed version using the following rules:

The given string is made up of words and numbers separated by spaces.

Leave the words unchanged.

Replace numbers with the word at that position, where the first word is at position 1.

For example, given "practice makes perfect and 3 1 2 3", return "practice makes perfect and perfect practice makes perfect".

## Word Compressor

Given a string, return a compressed version of the string using the following rules:

The first occurrence of a word remains unchanged.

Subsequent occurrences are replaced with the position of the first occurrence, where the first word is at position 1.

Words are separated by a single space.

For example, given "practice makes perfect and perfect practice makes perfect", return "practice makes perfect and 3 1 2 3".