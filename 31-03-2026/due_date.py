def get_due_date(date_str):
    [year, month, day] = list(map(int, date_str.split("-")))
    dueDay = day;
    nineMonthsLater = month + 9;
    dueYear = year + 1 if nineMonthsLater > 12 else year;
    dueMonth = nineMonthsLater - 12 if nineMonthsLater > 12  else nineMonthsLater;
    
    if day > 28 and dueMonth == 2:
        dueDay = 28;
    elif day > 30 and dueMonth in [4, 6, 9, 11]:
        dueDay = 30;

    return f"{str(dueYear).rjust(4, '0')}-{str(dueMonth).rjust(2, '0')}-{str(dueDay).rjust(2, '0')}";

print(get_due_date("2025-03-30")); # "2025-12-30".
print(get_due_date("2025-04-27")); # "2026-01-27".
print(get_due_date("2025-05-29")); # "2026-02-28".
print(get_due_date("2026-06-30")); # "2027-03-30".
print(get_due_date("2026-10-11")); # "2027-07-11".
