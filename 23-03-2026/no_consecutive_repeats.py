def has_no_repeats(s):
    noRepeats = True;

    for i in range(len(s)):
        if i + 1 < len(s):
            if s[i] == s[i + 1]:
                noRepeats = False;
                break;

    return noRepeats;

print(has_no_repeats("hi world")); # True.
print(has_no_repeats("hello world")); # False.
print(has_no_repeats("abcdefghijklmnopqrstuvwxyz")); # True.
print(has_no_repeats("freeCodeCamp")); # False.
print(has_no_repeats("The quick brown fox jumped over the lazy dog.")); # True.
print(has_no_repeats("Mississippi")); # False.
