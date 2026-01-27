## Count characters in your string

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

## List Filtering

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example

filter_list([1,2,'a','b']) == [1,2]

filter_list([1,'a','b',0,15]) == [1,0,15]

filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

## Break camelCase

Complete the solution so that the function will break up camel casing, using a space between words.

Example

"camelCasing" => "camel Casing"

"identifier" => "identifier"

"" => ""

## Jaden Casing Strings

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

- Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
- Jaden-Cased: "How Can Mirrors Be Real If Our Eyes Aren't Real"

(Link to Jaden's former Twitter account @officialjaden via archive.org)[https://web.archive.org/web/20190624190255/https://twitter.com/officialjaden]
