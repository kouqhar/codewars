def get_difficulty(track):
    points = 0

    for i in range(len(track)):
        currentChar = track[i]
        nextChar = track[i + 1] if i + 1 < len(track) else None

        if nextChar:
            if currentChar == "L" and nextChar == "R" or currentChar == "R" and nextChar == "L":
                points += 15
            elif currentChar == "L" or currentChar == "R":
                points += 5
            else:                
                points += 0

        else:
            break

    if points <= 100:
        return "Easy"
    elif points <= 200:
        return "Medium"
    else:
        return "Hard"

print(get_difficulty("SLSLLSRRLSRLRL")); # Easy
print(get_difficulty("SRRRRLSLLRLRSSRLSRL")); # Medium
print(get_difficulty("LLRSLRLRSLLRLRSLRRLRSRLLS")); # Hard
