def get_pizzas_to_order(hours_worked):
    total_hours = 0

    for hours in hours_worked:
        #ceil() in Python rounds a number up to the nearest integer. It's part of the math module and always rounds toward positive infinity, regardless of whether the number is positive or negative.

        # Alternative Without Importing
        # To round up a number to the nearest integer without using the math module, you can use the following expression

        # This works because the double negation effectively rounds the number up to the nearest integer. The first negation converts the number to a negative value, and the second negation converts it back to a positive value, resulting in the desired rounding behavior.

        slice_hours = -((-hours // 3) // 1) # math.ceil(hours / 3)

        if slice_hours < 2:
            total_hours += 2
        else:
            total_hours += slice_hours

    return -((-total_hours // 8) // 1) # math.ceil(total_hours / 8)

print(get_pizzas_to_order([8, 8, 8])); # 2.
print(get_pizzas_to_order([10, 9, 8, 2, 2, 6, 10])); # 3.
print(get_pizzas_to_order([1, 2, 3, 4, 5])); # 2.
print(get_pizzas_to_order([8, 8, 8, 8, 8, 8, 8, 8])); # 3.
print(get_pizzas_to_order([9, 9, 6])); # 1.
print(get_pizzas_to_order([10, 12, 16, 9, 8, 11, 15, 8, 0])); # 5.
