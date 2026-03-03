from datetime import datetime, timedelta

def count_business_days(start, end):
    startDate, endDate, business_days = datetime.strptime(start, "%Y-%m-%d"), datetime.strptime(end, "%Y-%m-%d"), 0

    # Loop through each date from start to end
    while startDate <= endDate:
        if startDate.weekday() < 5:  # Monday to Friday are business days (0-4)
            business_days += 1
        startDate += timedelta(days=1)  # Move to the next day

    return business_days


print(count_business_days("2026-02-24", "2027-02-24")); # 262
print(count_business_days("2026-03-08", "2026-03-17")); # 7
print(count_business_days("2026-02-21", "2026-03-01")); # 5
print(count_business_days("2026-02-24", "2026-02-28")); # 4
print(count_business_days("2026-02-24", "2026-02-26")); # 3
