def count_change(change):
  total = sum(change);
  [dollars, cents] = [(total // 100), total % 100];
  centConcatenation = str(cents) if cents >= 10 else f"0{cents}";

  return f"${dollars}.{centConcatenation}";


print(count_change([25, 10, 5, 1, 25, 10, 25, 1, 1, 10, 5, 25])); # "$1.43"
print(count_change([100, 25, 100, 1000, 5, 500, 2000, 25])); # "$37.55"
print(count_change([1])); # "$0.01"
print(count_change([25, 25, 25, 25])); # "$1.00"
print(count_change([10, 5, 1, 10, 1, 25, 1, 1, 5, 1, 10])); # "$0.70"
