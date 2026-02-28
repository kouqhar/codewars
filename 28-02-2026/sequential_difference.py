def find_differences(arr):
    newArr = []

    for i in range(len(arr)):
        newArr.append(0 if i == len(arr) - 1 else arr[i + 1] - arr[i])

    return newArr

print(find_differences([1, 2, 3, 4, 5])) # [1, 1, 1, 1, 0]
print(find_differences([10, 15, 19, 22, 24, 25])) # [5, 4, 3, 2, 1, 0]
print(find_differences([1, 2, 4, 7])) # [1, 2, 3, 0]
print(find_differences([1, 2, 5, 12, 34, -15, -1, 41, 113, -222, -99, -40, 10, -18, -6, -2, -1])) # [1, 3, 7, 22, -49, 14, 42, 72, -335, 123, 59, 50, -28, 12, 4, 1, 0]
