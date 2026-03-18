import re
def largest_number(s):
    data = list(re.sub(r"[\!\,\?\:\;]", ",", s).split(","))
    decimal = sorted(map(float, data))[-1]
    number = int(decimal)

    return decimal if decimal > number else number

print(largest_number("1,2")); # 2.
print(largest_number("4;15:60,26?52!0")); # 60.
print(
  largest_number("-402,-1032!-569:-947;-633?-800!-1012;-402,-723?-8102!-3011"),
); # -402.
print(largest_number("12;-50,99.9,49.1!-10.1?88?16")); # 99.9.
