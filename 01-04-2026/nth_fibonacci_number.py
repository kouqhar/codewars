def nth_fibonacci(n):
    fibArr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

    if n <= 11:
        return fibArr[n - 1]
    else:
        for i in range(11, n):
            fibArr.append(fibArr[i - 1] + fibArr[i - 2])

    return fibArr[n - 1]

print(nth_fibonacci(4)) # 2.
print(nth_fibonacci(10)) # 34.
print(nth_fibonacci(15)) # 377.
print(nth_fibonacci(40)) # 63245986.
print(nth_fibonacci(75)) # 1304969544928657.