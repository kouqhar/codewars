def get_word_score(word):
    wordCase, case_unit = word.lower(), 96 # For lowercase letters
    # wordCase, case_unit = word.upper(), 64 # For uppercase letters

# Method 1: Solution using a for loop:
    mth1_score = 0
    for char in wordCase:
        mth1_score += ord(char) - case_unit

    return mth1_score

# Method 2: Solution using list comprehension:
    mth2_score = sum([ord(char) - case_unit for char in wordCase])

    return mth2_score

# Method 3: Solution using map and lambda function:
    mth3_score = sum(map(lambda char: ord(char) - case_unit, wordCase))

    return mth3_score

print(get_word_score("hi")); # 17.
print(get_word_score("hello")); # 52.
print(get_word_score("hippopotamus")); # 169.
print(get_word_score("freeCodeCamp")); # 94.
