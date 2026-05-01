import re

def get_last_letter(s):
    letters = re.findall(r'[a-zA-Z]', s)
    letters_lower = "".join(letters).lower()
    char_code = [ord(char) for char in letters_lower]
    max_index = char_code.index(max(char_code))

    return letters[max_index]

print(get_last_letter("world")) # "w".
print(get_last_letter("Hello World")) # "W".
print(get_last_letter("The quick brown fox jumped over the lazy dog.")) # "z".
print(get_last_letter("HeLl0")) # "L".
print(get_last_letter("!#$ er@R asd fT.,> 2t0e9")) # "T".