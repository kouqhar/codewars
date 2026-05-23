def sleep_debt(hours_slept, target_hours):
    total_hours_slept = sum(hours_slept)
    total_target_hours = target_hours * (len(hours_slept) + 1)
    sleep_debt = total_target_hours - total_hours_slept

    return sleep_debt if sleep_debt > 0 else 0

print(sleep_debt([6, 6, 6, 6, 6, 6], 8)) # 20.
print(sleep_debt([6, 7, 8, 4, 8, 6], 7)) # 10.
print(sleep_debt([10, 10, 9, 10, 9, 11], 9)) # 4.
print(sleep_debt([8, 7, 6, 7, 6, 8], 6)) # 0.
print(sleep_debt([8, 9, 10, 9, 10, 7], 7)) # 0.