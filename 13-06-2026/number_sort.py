def sort_numbers(s):
    s = s.split(",")

    return sorted(list(map(int, s)))

print(sort_numbers("3,1,2")) # [1, 2, 3].
print(sort_numbers("5,3,8,1,9,2")) # [1, 2, 3, 5, 8, 9].
print(sort_numbers("12,61,49,80,19,50,77,38")) # [12, 19, 38, 49, 50, 61, 77, 80].
print(sort_numbers("0,6,-19,44,-2,7,0")) # [-19, -2, 0, 0, 6, 7, 44].