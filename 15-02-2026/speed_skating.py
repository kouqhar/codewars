def largest_difference(skater1, skater2):
    lapRecord = [-999, 0]

    for i in range(len(skater1)):
        dif = abs(skater1[i] - skater2[i])
        if dif > lapRecord[0]:
            lapRecord = [dif, i + 1]

    return lapRecord[1]

print(largest_difference([25.82, 25.9, 26.05, 26.0, 26.48],
    [25.85, 25.92, 26.07, 25.98, 25.95])) # 5
print(largest_difference([26.11, 25.8, 25.92, 26.23, 26.07],
    [25.93, 25.74, 26.53, 26.11, 26.3])) # 3
print(largest_difference([27.04, 25.94, 26.22, 26.07, 26.18],
    [25.59, 25.8, 26.11, 26.01, 26.23])) # 1