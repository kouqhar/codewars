import re

def count_letters_and_numbers(s):

    digits = re.findall(r"\d", s)
    letters = re.findall(r"[a-zA-Z]", s)
    dStr, sStr = "number", "letter"

    if len(letters) != 1:
        sStr += "s"
    if len(digits) != 1:
        dStr += "s"

    return f"The string has {len(letters)} {sStr} and {len(digits)} {dStr}."



print(count_letters_and_numbers("helloworld123"))
print(count_letters_and_numbers("A1!"))
print(count_letters_and_numbers("12345"))
print(count_letters_and_numbers("password"))