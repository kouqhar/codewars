def is_narcissistic(n):

    return n == sum([int(x) ** len(str(n)) for x in str(n)])


print(is_narcissistic(153)); # True
print(is_narcissistic(154)); # False
print(is_narcissistic(371)); # True
print(is_narcissistic(512)); # False
print(is_narcissistic(9)); # True
print(is_narcissistic(11)); # False
print(is_narcissistic(9474)); # True
print(is_narcissistic(6549)); # False
