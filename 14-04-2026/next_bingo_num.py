def get_next_bingo_number(n):
    letter, number = n[0], int(n[1:])
    lookUpTable = [
        ["B", 15],
        ["I", 30],
        ["N", 45],
        ["G", 60],
        ["O", 75]
    ]
    
    for i in range(len(lookUpTable)):
        if lookUpTable[i][0] == letter:
            number += 1
            if number > lookUpTable[i][1]:
                resetNumber = 1 if number > 75 else number
                return f"{lookUpTable[(i + 1) % len(lookUpTable)][0]}{resetNumber}"
            else:
                return  f"{lookUpTable[i][0]}{number}"

print(get_next_bingo_number("B10")) # "B11".
print(get_next_bingo_number("N33")) # "N34".
print(get_next_bingo_number("I30")) # "N31".
print(get_next_bingo_number("G60")) # "O61".
print(get_next_bingo_number("O75")) # "B1".