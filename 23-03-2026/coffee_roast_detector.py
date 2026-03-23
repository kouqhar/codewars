import re

def detect_roast(beans):
    apos = len(re.findall(r"\'",beans))
    dash = len(re.findall(r"\-",beans)) * 2 
    dot = len(re.findall(r"\.",beans))  * 3
    total = sum([dash, apos, dot]) / len(beans)

    if total < 1.75:
        return "Light"
    elif total <= 2.5 and total >= 1.75:
        return "Medium"
    else:
        return "Dark"

print(detect_roast("''-''''''-'-''--''''")) # "Light".
print(detect_roast(".'-''-''..'''.-.-''-")) # "Medium".
print(detect_roast("--.''--'-''.--..-.--")) # "Medium".
print(detect_roast("-...'-......-..-...-")) # "Dark".
print(detect_roast(".--.-..-......----.'")) # "Medium".
print(detect_roast("..-..-..-..-....-.-.")) # "Dark".
print(detect_roast("-'-''''''..-'.''-'.'")) # "Light".