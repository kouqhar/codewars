def palindrome_locator(s):
    strToArr = list(s)
    oddOrEven = "".join(strToArr[int(len(s) / 2 - 1) : int(len(s) / 2 + 1)]) if s and len(s) % 2 == 0 else s[len(s) // 2]

    return oddOrEven if s[::-1] == s else "none";


print(palindrome_locator("racecar")); # "e".
print(palindrome_locator("level")); # "v".
print(palindrome_locator("freecodecamp")); # "none".
print(palindrome_locator("noon")); # "oo".
print(palindrome_locator("11100111")); # "00".
