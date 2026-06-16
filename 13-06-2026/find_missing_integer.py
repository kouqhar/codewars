def find_missing_integer(arr):
    arr = [elem for elem in arr if elem > 0]
    newArr = set(arr)

    if not newArr:
        return 1
    else:
        if len(newArr) == max(newArr):
            return max(newArr) + 1
        else:
            for i in range(1, len(newArr) + 1):
                if i not in newArr:
                    return i

print(find_missing_integer([1, 3, 6, 4, 1, 2])) # 5
print(find_missing_integer([1, 2, 3])) # 4
print(find_missing_integer([-1, -2, 0])) # 1
print(find_missing_integer([2, 3, 7, 6, 8, -1, -10, 15])) # 1