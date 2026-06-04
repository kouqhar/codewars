def is_valid_schema(obj):
    ROLES = ["user", "creator", "moderator", "staff", "admin"];
    if not is_valid(obj, "username", str) or not is_valid(obj, "posts", int) or not is_valid(obj, "verified", bool) or not is_valid(obj, "role", str) or obj["role"] not in ROLES:
        return False

    return True

def is_valid(obj, key, expected_type):
    if key not in obj or not isinstance(obj[key], expected_type):
        return False
    return True

print(is_valid_schema({"username": "henry", "posts": 0, "verified": True, "role": "staff"})) # True.
print(is_valid_schema({"username": "sara", "posts": 45, "verified": False, "role": "creator", "followers": 70})) # True.
print(is_valid_schema({"username": "penelope", "posts": 20, "verified": True, "role": "admin"})) # True.
print(is_valid_schema({"username": "kevin", "posts": 0, "verified": False, "role": "user"})) # True.
print(is_valid_schema({"username": "george", "posts": 15, "verified": True, "role": "moderator"})) # True.
print(is_valid_schema({"username": "david", "posts": 0, "verified": False, "role": "guest"})) # False.
print(is_valid_schema({"username": "wendy", "posts": 10, "verified": True})) # False.
print(is_valid_schema({"username": "fabian", "posts": 1, "verified": True, "role": True})) # False.
print(is_valid_schema({"username": 8, "posts": 1, "verified": True, "role": "user"})) # False.
print(is_valid_schema({"username": "penny", "posts": "10", "verified": True, "role": "staff"})) # False.
print(is_valid_schema({"username": "john", "posts": "1", "verified": "true", "role": "admin"})) # False.