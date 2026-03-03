import re

def add_punctuation(text):
    
    text = re.sub(r"\s(?=[A-Z])", ". ", text)
    
    if not text.endswith("."):
        text += "."
    return text

print(add_punctuation("Hello world This is a test")) # "Hello world. This is a test."
print(add_punctuation("This is another test")) # "This is another test."
print(add_punctuation("NoPunctuationHere")) # "NoPunctuationHere."
print(add_punctuation("Multiple Sentences Here And There")) # "Multiple Sentences Here. And There."