def is_valid_trick(trick_name):
    valid_first = [
        "Misty",
        "Ghost",
        "Thunder",
        "Solar",
        "Sky",
        "Phantom",
        "Frozen",
        "Polar"]

    valid_second = [
        "Twister",
        "Icequake",
        "Avalanche",
        "Vortex",
        "Snowstorm",
        "Frostbite",
        "Blizzard",
        "Shadow"]

    return trick_name.split()[0] in valid_first and trick_name.split()[1] in valid_second

print(is_valid_trick("Polar Vortex")) # True
print(is_valid_trick("Misty Twisters")) # False
print(is_valid_trick("Solar Icequake")) # True
print(is_valid_trick("Thunders Avalanche")) # False