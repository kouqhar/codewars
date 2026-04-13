def is_fizz_buzz(arr):
    foundDigitIndex = next((i for i, x in enumerate(arr) if isinstance(x, int)), -1)
    digit, resultArray = arr[foundDigitIndex], [];
    firstDigit = digit - foundDigitIndex;
    numArray = list(range(firstDigit, firstDigit + len(arr)))

    for i in range(len(numArray)):
        currentElem = numArray[i];
        elementIsFizz, elementIsBuzz = currentElem % 3 == 0, currentElem % 5 == 0

        if elementIsFizz and elementIsBuzz:
            resultArray.append("FizzBuzz")
        elif elementIsFizz:
            resultArray.append("Fizz")
        elif elementIsBuzz:
            resultArray.append("Buzz")
        else:
            resultArray.append(currentElem)
        
        if arr[i] != resultArray[i]:
            return False

    return True


print(is_fizz_buzz([1, 2, "Fizz", 4, "Buzz"])) # True.
print(is_fizz_buzz([13, 14, "FizzBuzz", 16, 17])) # True.
print(is_fizz_buzz([1, 2, "Fizz", 4, 5])) # False.
print(is_fizz_buzz(["FizzBuzz", 16, 17, "Fizz", 19, "Buzz"])) # True.
print(is_fizz_buzz([1, 2, "Fizz", "Buzz", 5])) # False.
print(is_fizz_buzz([97, 98, "Buzz", "Fizz", 101, "Fizz", 103])) # False.
print(is_fizz_buzz(["Fizz", "Buzz", 101, "Fizz", 103, 104, "FizzBuzz"])) # True.
