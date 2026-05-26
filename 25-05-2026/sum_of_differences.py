def sum_of_differences(arr):
  diffSum = 0;

  for i in range(len(arr) - 1):
    diffSum += arr[i + 1] - arr[i];

  return diffSum;

print(sum_of_differences([1, 3, 4])); # 3.
print(sum_of_differences([5, -3, 3, 9, 10])); # 5.
print(sum_of_differences([9, 6, 15, -20, 33, 14, 25, 16, -7])); # -16.
print(
  sum_of_differences([50, 102, -46, 82, -49, 29, 71, 902, -237, 111, -61, 75]),
); # 25.