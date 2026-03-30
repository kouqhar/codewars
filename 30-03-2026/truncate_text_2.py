import re

def truncate_text(s):
    firstSub = re.sub(r'[ilI\.]', '1', s)
    secondSub = re.sub(r'[fjrt\s]', '2', firstSub)
    thirdSub = re.sub(r'[a-zJL]', '3', secondSub)
    fourthSub = re.sub(r'[A-Z]', '4', thirdSub)
    numStr = list(map(int, list(fourthSub)))

    count = 0
    for i in range(len(numStr)):
        count += numStr[i]
        nextCount = count + (numStr[i + 1] or 0) if i + 1 < len(numStr) else count
        
        if nextCount <= 50 and i + 1 >= len(numStr):
            return s
        if nextCount + 3 > 50 and i + 1 <= len(numStr):
            return s[: i + 1] + "...";


print(truncate_text("The quick brown fox")); # "The quick brown f..."
print(truncate_text("The silky smooth sloth")); # "The silky smooth s..."
print(truncate_text("THE LOUD BRIGHT BIRD")); # "THE LOUD BRIG..."
print(truncate_text("The fast striped zebra")); # "The fast striped z..."
print(truncate_text("The big black bear")); # "The big black bear"
