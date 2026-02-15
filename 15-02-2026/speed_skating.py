def largest_difference(skater1, skater2):
    lapRecord = [-999, 0]

    for i in range(len(skater1)):
        dif = abs(skater1[i] - skater2[i])
        if dif > lapRecord[0]:
            lapRecord = [dif, i + 1]

    return lapRecord[1]