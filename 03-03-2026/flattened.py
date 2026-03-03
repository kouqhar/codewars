def is_flat(arr):
    for item in arr:
        if isinstance(item, list):
            return False
    return True

print(is_flat([1, 2, 3, 4])); # true
print(is_flat([1, [2, 3], 4])); # false
print(is_flat([1, 2, [3, 4], 5])); # false
print(is_flat([1, 2, 3, 4, 5])); # true
