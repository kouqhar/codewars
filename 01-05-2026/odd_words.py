def get_odd_words(s):
    words = s.split(" ")
    odd_words = [word for i, word in enumerate(words) if len(word) % 2 != 0]
    
    return " ".join(odd_words)

print(get_odd_words("This is a super good test")) # "a super".
print(get_odd_words("one two three four")) # "one two three".
print(get_odd_words("banana split sundae with rainbow sprinkles on top")) # "split rainbow sprinkles top".
print(get_odd_words("The quick brown fox jumped over the lazy river")) # "The quick brown fox the river".