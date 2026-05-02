def is_valid_equation(equation):
    left_side, right_side = equation.split('=')
    left_value = eval(left_side.strip())    


    return left_value == float(right_side.strip())

print(is_valid_equation("2 + 2 = 4")); # true.
print(is_valid_equation("2 + 3 - 1 = 4")); # true.
print(is_valid_equation("8 / 2 = 4")); # true.
print(is_valid_equation("10 * 5 = 50")); # true.
print(is_valid_equation("2 - 2 = 0")); # true.
print(is_valid_equation("2 + 9 / 3 = 5")); # true.
print(is_valid_equation("20 - 2 * 3 = 14")); # true.
print(is_valid_equation("2 + 5 = 6")); # false.
print(is_valid_equation("10 - 2 * 3 = 24")); # false.
print(is_valid_equation("3 + 9 / 3 = 4")); # false.
