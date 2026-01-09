def multi_table(number):
    result = []
    for i in range(1, 11):
        result.append(f"{i} * {number} = {number * i}")
    return ("\n".join(result))