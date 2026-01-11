def sum_digits(number):
    result = 0
    for x in list(str(abs(number))):
        result += int(x)
    return result