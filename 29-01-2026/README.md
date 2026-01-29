## Build Tower

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "\*" character.

For example, a tower with 3 floors looks like this:

[
" * ",
" *** ",
"*****"
]
And a tower with 6 floors looks like this:

[
" * ",
" *** ",
" ***** ",
" ******* ",
" ********* ",
"***********"
]

Go challenge Build Tower Advanced [https://www.codewars.com/kata/57675f3dedc6f728ee000256] once you have finished this :)

## Delete occurrences of an element if it occurs more than n times

Enough is enough!

Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task

Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].

## Highest Scoring Word

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

## Playing with digits

Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 \* 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 \* 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 \* 51

Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k \* n.

In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :

( a^p + b^p+1 + c^p+2 + d^p+3 + ... ) = n \* k

If it is the case we will return k, if not return -1.

Note: n and p will always be strictly positive integers.

Examples:

n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 \* 1

n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 \* k

n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 \* 2

n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 \* 51
