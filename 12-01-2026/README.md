## What is between

**Description:**

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

- a = 1
- b = 4
- --> [1, 2, 3, 4]

## Sum of the first nth terms of series

**Description:**

**Task**

Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

Series:

1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 + …

You will need to figure out the rule of the series to complete this.

**Rules**

You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return "0.00".

You will only be given Natural Numbers as arguments.

Examples (Input --> Output)

- n
- 1 --> 1 --> "1.00"
- 2 --> 1 + 1/4 --> "1.25"
- 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

## Function 2 - squaring an argument

**Description:**

Now you have to write a function that takes an argument and returns the square of it.

## Remove the minimum

**Description:**

The museum of incredibly dull things
The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

**Task**

Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples

- Input: [1,2,3,4,5], output = [2,3,4,5]
- Input: [5,3,2,1,4], output = [5,3,2,4]
- Input: [2,2,1,2,1], output = [2,2,2,1]

##

**Description:**

The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

| Correct answer | Student's answer | Result |
| -------------- | ---------------- | ------ |

- ["a", "a", "b", "b"] ["a", "c", "b", "d"] → 6
- ["a", "a", "c", "b"] ["a", "a", "b", "" ] → 7
- ["a", "a", "b", "c"] ["a", "a", "b", "c"] → 16
- ["b", "c", "b", "a"] ["" , "a", "a", "c"] → 0

## Lucky number

**Description:**

Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.

1892376 => 1+8+9+2+3+7+6 = 36. 36 is divisible by 9, hence number is lucky.

Function will return true for lucky numbers and false for others.
