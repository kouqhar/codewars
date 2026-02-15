def compute_score(judge_scores, *penalties):

    return sum(sorted(judge_scores)[1:-1]) - sum(penalties) or 0

print(compute_score([10, 8, 9, 6, 9, 8, 8, 9, 7, 7], 1)); # 64
print(compute_score([10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); # 80
print(compute_score([10, 8, 9, 10, 9, 8, 8, 9, 10, 7], 1, 2, 1)); # 67
print(
  compute_score([8.0, 8.5, 9.0, 8.5, 9.0, 8.0, 9.0, 8.5, 9.0, 8.5], 0.5, 1.0),
); # 67.5