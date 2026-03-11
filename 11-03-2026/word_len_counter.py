def convert_words(s):
    strCount, count = "", 0

    for i in range(len(s)):
        count += 1
        if(s[i] == " "):
            strCount += f"{count - 1} "
            count = 0
            
    return f"{strCount}{count}"

print(convert_words("hello world")); # "5 5".
print(convert_words("Thanks and happy coding")); # "6 3 5 6".
print(convert_words("The quick brown fox jumps over the lazy dog")); # "3 5 5 3 5 4 3 4 3".
print(
  convert_words(
    "Lorem ipsum dolor sit amet consectetur adipiscing elit donec ut ligula vehicula iaculis orci vel semper nisl",
  ),
); # "5 5 5 3 4 11 10 4 5 2 6 8 7 4 3 6 4".
