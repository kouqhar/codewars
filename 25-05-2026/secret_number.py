def guess_number(secret, guess):

    if secret > guess:
        return "higher"
    elif secret < guess:
        return "lower"
    else:
        return "you got it!"

print(guess_number(50, 30)); # "higher".
print(guess_number(85, 99)); # "lower".
print(guess_number(2026, 2026)); # "you got it!".
print(guess_number(92904, 11283)); # "higher".
print(guess_number(230495, 423920)); # "lower".
print(guess_number(120349, 120349)); # "you got it!".
