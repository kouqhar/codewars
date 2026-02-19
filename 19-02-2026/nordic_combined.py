from math import ceil

def calculate_start_delays(jump_scores):
    max_score = max(jump_scores)

    for i in range(len(jump_scores)):
        jump_scores[i] = ceil((max_score - jump_scores[i]) * 1.5)

    return jump_scores

print(calculate_start_delays([120, 110, 125])) # [8, 23, 0]
print(calculate_start_delays([118, 125, 122, 120])) # [11, 0, 5, 8]
print(calculate_start_delays([100, 105, 95, 110, 120, 115, 108])) # [30, 23, 38, 15, 0, 8, 18]