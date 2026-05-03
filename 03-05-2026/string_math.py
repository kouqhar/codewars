import re

def do_math(s):
    strSplit = re.split(r'\d+', s)

    # loop through the split string and check if the length of each string is even or odd, and store the result in a list
    operations = [len(op) % 2 == 0 for op in strSplit if len(op) > 0]
    numbers = [int(num) for num in re.findall(r'\d+', s)]
    isLastStringEven, isFirstStringEven = s[-1].isdigit(), s[0].isdigit()

    if not isLastStringEven:
        operations.pop(-1)  # Remove the last operation if the last character is not a digit
    if not isFirstStringEven:
        operations.pop(0)  # Remove the first operation if the first character is not a digit

    strValue = numbers[0]

    for i in range(len(operations)):
        if operations[i]:  # If the operation is even, add the next number
            strValue += numbers[i + 1]
        else:  # If the operation is odd, subtract the next number
            strValue -= numbers[i + 1]
            
    return strValue


print(do_math("3ab10c8")); # should return 5
print(do_math("6MINUS4")); # should return 2
print(do_math("9plus3")); # should return 12
print(do_math("5fkwo#10i#%.<>15P=@20!#B/25")); # should return 15
print(
  do_math(
    "a.67,1$lk6ldf34@#LD@]2d32d2'2l3,@l3L#@2gh35s09if=df#$t9sm49t0df3$^%[vc;:0:4mt",
  ),
); # should return 67
