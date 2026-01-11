## Help the bookseller !

**Description:**

A bookseller has lots of books classified in 26 categories labeled A, B, C, ..., Z. Each book has a code of at least 3 characters. The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code is followed by a space and by a positive integer, which indicates the quantity of books of this code in stock.

**Task**

You will receive the bookseller's stocklist and a list of categories. Your task is to find the total number of books in the bookseller's stocklist, with the category codes in the list of categories. Note: the codes are in the same order in both lists.

Return the result as a string described in the example below, or as a list of pairs (Haskell/Clojure/Racket/Prolog).

If any of the input lists is empty, return an empty string, or an empty array/list (Clojure/Racket/Prolog).

**Example**

#the bookseller's stocklist:

"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"

#list of categories:

"A", "B", "C", "W"

#result:

"(A : 20) - (B : 114) - (C : 50) - (W : 0)"

**Explanation:**

- category A: 20 books (ABART)
- category B: 114 books = 25 (BKWRK) + 89 (BTSQZ)
- category C: 50 books (CDXEF)
- category W: 0 books

# Binary Addition

**Description:**

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

**Examples:(Input1, Input2 --> Output (explanation))**

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)

5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

# Summing a number's digits

**Description:**

Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

- 10 --> 1
- 99 --> 18
- -32 --> 5

Let's assume that all numbers in the input will be integer values.

# No Zeros for heroes

**Description:**

Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

- 1450 -> 145
- 960000 -> 96
- 1050 -> 105
- -1050 -> -105
- 0 -> 0

Note: Zero should be left as it is.
