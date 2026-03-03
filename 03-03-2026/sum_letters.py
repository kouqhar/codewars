import re
def sum_letters(s):
    total, letters = 0, re.findall(r"[a-zA-Z]", s.lower())
    
    for letter in letters:
        total += ord(letter) - 96

    return 0 if len(letters) < 1 else total

print(sum_letters("Hello")) # 52
print(sum_letters("</404>")) # 0
print(sum_letters("The quick brown fox jumps over the lazy dog.")) # 473
print(sum_letters("freeCodeCamp")) # 94
print(sum_letters("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex nisl, pretium eu varius blandit, facilisis quis eros. Vestibulum ante ipsum primis in faucibus orci.")) # 1681