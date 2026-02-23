def calculate_penalty_distance(rounds):
    return ((len(rounds) * 5) - sum(rounds)) * 150



print(calculate_penalty_distance([4, 3, 0, 3])); # 1500
print(calculate_penalty_distance([4, 5, 3, 5])); # 450
print(calculate_penalty_distance([5, 5])); # 0
print(calculate_penalty_distance([4, 4])); # 300