def is_valid_card(number):
    i, total = len(number) - 1, 0

    while i >= 0:
        digit = int(number[i])
        j = len(number) - i
        num = digit * 2 if j % 2 == 0 else digit
        total += num - 9 if num > 9 else num
        i -= 1

    return total % 10 == 0

print(is_valid_card("4532015112830366")) # True.
print(is_valid_card("5425233430109903")) # True.
print(is_valid_card("371449635398431")) # True.
print(is_valid_card("6011111111111117")) # True.
print(is_valid_card("4532015112830367")) # False.
print(is_valid_card("1234567890123456")) # False.
print(is_valid_card("4532015112830368")) # False.