def is_valid_schema(obj):
    ROLES = ["user", "creator", "moderator", "staff", "admin"];
    SCHEMA = [
        ["username", str, False],
        ["posts", int, False],
        ["verified", bool, False],
        ["role", str, False],
        ["supporter", bool, True]
    ]

    if obj["role"] not in ROLES:
        return False
    
    for key, expected_type, optional in SCHEMA:
        if not is_valid(obj, key, expected_type, optional=optional):
            return False

    return True

def is_valid(obj, key, expected_type, optional):
    if optional:
        if (key in obj and isinstance(obj[key], expected_type)) or key not in obj:
            return True
    elif key in obj:
        if expected_type == int and isinstance(obj[key], bool):
            return False 
        elif expected_type == bool and isinstance(obj[key], int) and not isinstance(obj[key], bool):
            return False
        elif isinstance(obj[key], expected_type):
            return True
    
    return False

print(is_valid_schema({"username": "vivian", "posts": 1, "verified": False, "role": "user", "supporter": True})) # True.
print(is_valid_schema({"username": "rudolph", "posts": 15, "verified": True, "role": "creator"})) # True.
print(is_valid_schema({"username": "hernandez", "posts": 35, "verified": True, "role": "moderator", "supporter": False, "followers": 55})) # True.
print(is_valid_schema({"username": "julia", "posts": 50, "verified": True, "role": "admin", "supporter": "true"})) # False.
print(is_valid_schema({"username": "bernard", "posts": 0, "verified": True, "role": "friend", "supporter": True})) # False.
print(is_valid_schema({"username": "felix", "posts": 40, "verified": "yes", "role": "staff", "supporter": False})) # False.
print(is_valid_schema({"username": "jimmy", "posts": True, "verified": False, "role": "creator", "supporter": True})) # False.
print(is_valid_schema({"username": True, "posts": 30, "verified": True, "role": "moderator", "supporter": False})) # False.