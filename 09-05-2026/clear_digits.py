def clearDigits(s):
    chars = []

    for c in s:
        if not c.isdigit():
            chars.append(c)
        else:
            chars.pop()

    return ''.join(chars)

print(clearDigits("abc"))  # abc
print(clearDigits("a1b2c3"))  # ''
print(clearDigits("cba34"))  # 'c'
