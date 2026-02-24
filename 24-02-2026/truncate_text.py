def truncate_text(text):

    return text if len(text) <= 20 else text[:17] + "..."

print(truncate_text("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")) # Output: "Lorem ipsum dolor..."
print(truncate_text("Exactly twenty chars")) # "Exactly twenty chars"