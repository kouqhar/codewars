## Find The Singleton

A class of students have a project to work on in pairs. Everyone in the class found a partner, apart from one student. Using the student_list provided (which details every student in the class represented by the number of their team), find the student with no partner.

Note :

The number of teams can represent either: only two students or the single student. Try to find the most efficient solution!

INPUT

Number [] ===> student_list

^^ this contains students represented by their team number

OUTPUT

Number single_student_number

CONSTRAINTS
2 <= student_list[i] <= 100000

3 <= i <= 10000

EXAMPLE

Input : ===> [2,4,5,4,2]

Output : ===> 5

## Lucky number

Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.

1892376 => 1+8+9+2+3+7+6 = 36. 36 is divisible by 9, hence number is lucky.

Function will return true for lucky numbers and false for others.

## Vowel Remover

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples

- "hello" --> "hll"
- "codewars" --> "cdwrs"
- "goodbye" --> "gdby"
- "HELLO" --> "HELLO"

don't worry about uppercase vowels

y is not considered a vowel for this kata

## Consecutive Strings

You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:

strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling (length 10) concatenation of strarr[0] and strarr[1]

folingtrashy (" 12) concatenation of strarr[1] and strarr[2]

trashyblue (" 10) concatenation of strarr[2] and strarr[3]

blueabcdef (" 10) concatenation of strarr[3] and strarr[4]

abcdefuvwxyz (" 12) concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".

The first that came is "folingtrashy" so

longest_consec(strarr, 2) should return "folingtrashy".

In the same way:

longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

Note

consecutive strings : follow one after another without an interruption

## Find the middle element

As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0

2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1

10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
