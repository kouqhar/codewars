def is_valid_isbn_13(s):
    s = s.replace("-", "")

    return s.isdigit() and len(s) == 13 and sum((int(s[i]) * (1 if i % 2 == 0 else 3) for i in range(12))) % 10 == (10 - int(s[12])) % 10

print(is_valid_isbn_13("9780306406157")); # True.
print(is_valid_isbn_13("97803064061570")); # False.
print(is_valid_isbn_13("978-0-13-595705-9")); # True.
print(is_valid_isbn_13("978-030-64061A-4")); # False.
print(is_valid_isbn_13("9-7-8-0-1-3-4-7-5-7-5-9-9")); # True.
