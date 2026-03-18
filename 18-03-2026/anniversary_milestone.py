def get_milestone(years):
    chart = {
        0: "Newlyweds",
        1: "Paper",
        5: "Wood",
        10: "Tin",
        25: "Silver",
        40: "Ruby",
        50: "Gold",
        60: "Diamond",
        70: "Platinum",
    };

    position = list(filter(lambda x: x < years, chart.keys()))[-1] if years > 1 else years
    
    return chart.get(years, chart[position] or chart[0])

print(get_milestone(0)); # "Newlyweds".
print(get_milestone(1)); # "Paper".
print(get_milestone(8)); # "Wood".
print(get_milestone(10)); # "Tin".
print(get_milestone(26)); # "Silver".
print(get_milestone(45)); # "Ruby".
print(get_milestone(50)); # "Gold".
print(get_milestone(64)); # "Diamond".
print(get_milestone(71)); # "Platinum".