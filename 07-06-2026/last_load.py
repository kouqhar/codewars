def last_load_date(scoops, usage):
    usage_len, usage_sum = len(usage), sum(usage)
    usage_avg = usage_sum / usage_len

    return int(scoops // usage_avg)

print(last_load_date(10, [2, 2, 2, 2, 2, 2, 2])) # 5.
print(last_load_date(16, [2, 3, 0, 3, 4, 2, 1])) # 7.
print(last_load_date(33, [5, 0, 4, 3, 3, 2])) # 11.
print(last_load_date(50, [2, 0, 2, 9, 12, 0, 2])) # 12.
print(last_load_date(20, [13, 9, 12, 10, 8])) # 1.
