def maxRotateFunction(nums):
    n = len(nums)
    if n == 0:
        return 0

    # Calculate the initial value of F(0)
    F = sum(i * nums[i] for i in range(n))
    max_value = F

    # Calculate F(k) for k = 1 to n-1 using the relation
    for k in range(1, n):
        F = F + sum(nums) - n * nums[n - k]
        max_value = max(max_value, F)

    return max_value

print(maxRotateFunction([4, 3, 2, 6])); # 26
print(maxRotateFunction([100])); # 0
print(maxRotateFunction([1, 2, 3, 4, 5])); # 40
print(maxRotateFunction([1, 2, 3, 4, 5, 6])); # 70
print(maxRotateFunction([1, 2, 3, 4, 5, 6, 7])); # 112
print(maxRotateFunction([1, 2, 3, 4, 5, 6, 7, 8])); # 168
print(maxRotateFunction([1, 2, 3, 4, 5, 6, 7, 8, 9])); # 240
print(maxRotateFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); # 330
