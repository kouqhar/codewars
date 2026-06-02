def fizz_buzz_count(start, end):
    numArray = {
        "fizz": 0,
        "buzz": 0,
    }

    for i in range(start, end + 1):
        if i % 3 == 0:
            numArray["fizz"] += 1
        
        if i % 5 == 0:
            numArray["buzz"] += 1

    return numArray

print(fizz_buzz_count(1, 11)) # {"fizz": 3, "buzz": 2}.
print(fizz_buzz_count(14, 41)) # {"fizz": 9, "buzz": 6}.
print(fizz_buzz_count(24, 100)) # {"fizz": 26, "buzz": 16}.
print(fizz_buzz_count(-635, -14)) # {"fizz": 207, "buzz": 125}.
print(fizz_buzz_count(-5432, 6789)) # {"fizz": 4074, "buzz": 2444}.