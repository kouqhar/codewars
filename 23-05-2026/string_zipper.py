def zip_strings(a, b):
    aSplit, bSplit, finalStr = list(a), list(b), "";
    remainingB = "".join(bSplit[len(aSplit):]);

    for i in range(len(aSplit)):
        finalStr += aSplit[i] + bSplit[i];

    return finalStr + remainingB

print(zip_strings("abc", "123")); # "a1b2c3".
print(zip_strings("acegikmoqsuwy", "bdfhjlnprtvxz")); # "abcdefghijklmnopqrstuvwxyz".
print(zip_strings("day", "night")); # "dnaiyght".
print(zip_strings("python", "javascript")); # "pjyatvhaosncript".
print(zip_strings("feCdCm", "reoeap")); # "freeCodeCamp".
