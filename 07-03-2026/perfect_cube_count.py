def count_perfect_cubes(a, b):
    maxNum, minNum, absMax, count = max(a, b), min(a, b), max(abs(a), abs(b)), 0
    negFalse, posFalse = True, True

    for i in range(absMax):
        if not negFalse and not posFalse:
            break

        if minNum < 0 and negFalse:
            negCube = -(i ** 3);
            if negCube < 0 and negCube >= minNum: 
                count+=1;
            if negCube < minNum: 
                negFalse = False;

        if maxNum > 1 and posFalse:
            cube = i ** 3;
            if cube <= maxNum and cube >= minNum:
                count+=1;
            if cube > maxNum:
                posFalse = False;
    
    return count


print(count_perfect_cubes(3, 30)); # 2
print(count_perfect_cubes(1, 30)); # 3
print(count_perfect_cubes(30, 0)); # 4
print(count_perfect_cubes(-64, 64)); # 9
print(count_perfect_cubes(9214, -8127)); # 41
