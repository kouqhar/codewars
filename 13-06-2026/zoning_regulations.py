def get_zone_violations(grid):
    adjacent_lookup = {
        "i": {"R", "I"},
        "A": {"C"},
        "R": {"i", "C"},
        "I": {"i"},
        "C": {"R", "A"},
    }

    rowLen, violations = len(grid[0]), [] 
    arr_to_str = [cell for row in grid for cell in row]
    gridLen = len(arr_to_str)

    for i in range(gridLen):
        left, right = i - 1, i + 1

        if left >= 0 and i % rowLen == 0:
            left = -1

        if right >= 0 and i % rowLen == rowLen - 1:
            right = -1

        neighbors, currChar = [i - rowLen, i + rowLen, left, right, i], arr_to_str[i]
        violationsArr = adjacent_lookup.get(currChar)

        if currChar == "":
            continue

        if violationsArr:
            check = violation_check(arr_to_str, neighbors, violationsArr, rowLen)

            violations.append(check) if check else None
            
    return violations

def violation_check(arr, neighbors, violationsArr, rowLen):
    up, down, left, right, curr = neighbors
    arrLen = len(arr)
    currRow, currCol = [curr // rowLen, curr % rowLen];
    result = [currRow, currCol];

    if up >= 0 and arr[up] in violationsArr:
        return result
    
    if down >= 0 and arrLen > down and arr[down] in violationsArr: 
        return result
    
    if left >= 0 and arr[left] in violationsArr:
        return result
    
    if right >= 0 and arrLen > right and arr[right] in violationsArr:
        return result
    
print(get_zone_violations([["R", "C"], ["", "C"]])) # [[0, 0], [0, 1]].
print(get_zone_violations([["", "i"], ["", "R"], ["R", "I"]])) # [[0, 1], [1, 1]].
print(get_zone_violations([["A", "i", "C"], ["A", "", "C"], ["R", "R", "I"]])) # [].
print(get_zone_violations([["R", "R", "C", "R", "R"], ["R", "I", "C", "", "A"], ["R", "R", "", "i", "A"]])) # [[0, 1], [0, 2], [0, 3]].
print(get_zone_violations([["R", "A", "A", "", "i", "i"], ["R", "I", "", "C", "i", "i"], ["R", "", "C", "C", "A", "A"], ["R", "R", "C", "I", "R", "R"]])) # [[2, 3], [2, 4], [3, 1], [3, 2]].