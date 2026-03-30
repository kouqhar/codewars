import re
def is_valid_isbn10(s):
    firstNineDigits = re.sub(r"-", "", s)[:9];

    if len(s) - 3 != 10 or not re.findall(r"\d{9}", firstNineDigits):
         return False;

    isbn = re.findall(r"^\d{1}-\d+-\d+-[\dX]$", s)
    if isbn:
        strArr = list(re.sub(r"-", "", s))
        strArr[-1] = "10" if s[-1] == "X" else s[-1]
        digits = list(map(int, strArr))

        total = 0
        for i in range(len(digits)):
            total += (i + 1) * digits[i]

        return total % 11 == 0

print(is_valid_isbn10("0-306-40615-2")); # True
print(is_valid_isbn10("0-306-40615-1")); # False
print(is_valid_isbn10("0-8044-2957-X")); # True
print(is_valid_isbn10("X-306-40615-2")); # False
print(is_valid_isbn10("0-6822-2589-4")); # True
