## Array Helpers

This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared

cube() must return a copy of the array, containing all values cubed

average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)

sum() must return the sum of all array values

even() must return an array of all even numbers

odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!

Example

var numbers = [1, 2, 3, 4, 5];

numbers.square(); // must return [1, 4, 9, 16, 25]

numbers.cube(); // must return [1, 8, 27, 64, 125]

numbers.average(); // must return 3

numbers.sum(); // must return 15

numbers.even(); // must return [2, 4]

numbers.odd(); // must return [1, 3, 5]

## Fibonacci, Tribonacci and friends

If you have completed the Tribonacci sequence kata[http://www.codewars.com/kata/tribonacci-sequence], you would know by now that mister Fibonacci has at least a bigger brother. If not, give it a quick look to get how things work.

Well, time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.

Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.

xbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}

xbonacci {0,0,0,0,1} 10 = {0,0,0,0,1,1,2,4,8,16}

xbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}

xbonacci {1,1} produces the Fibonacci sequence
