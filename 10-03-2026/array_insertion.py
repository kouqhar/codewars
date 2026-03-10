def insert_into_array(arr, value, index):

    return arr.insert(index, value) or arr

print(insert_into_array([2, 4, 8, 10], 6, 2)) # [2, 4, 6, 8, 10].
print(insert_into_array(["the", "quick", "fox"], "brown", 2)) # ["the", "quick", "brown", "fox"].
print(insert_into_array([], 0, 0)) # [0].
print(insert_into_array([0, 1, 1, 2, 3, 8, 13], 5, 5)) # [0, 1, 1, 2, 3, 5, 8, 13].