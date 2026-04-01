def alarm_check(alarm_time, wake_time):
    atHr, atMin = map(int, alarm_time.split(":"))
    wtHr, wtMin = map(int, wake_time.split(":"))

    if (atHr > wtHr) or (atHr == wtHr and atMin > wtMin):
        return "early"
    elif alarm_time == wake_time or (atHr == wtHr and wtMin - atMin <= 10):
        return "on time"
    else: return "late"

print(alarm_check("07:00", "06:45")) # "early".
print(alarm_check("06:30", "06:30")) # "on time".
print(alarm_check("08:10", "08:15")) # "on time".
print(alarm_check("09:30", "09:45")) # "late".
print(alarm_check("08:15", "08:25")) # "on time".
print(alarm_check("05:45", "05:56")) # "late".
print(alarm_check("04:30", "04:00")) # "early".