def is_valid_schema(obj):
    if not is_valid(obj, "username", str) or not is_valid(obj, "posts", int) or not is_valid(obj, "verified", bool):
        return False
    
    return True

def is_valid(obj, key, expected_type):
    if key not in obj or not isinstance(obj[key], expected_type):
        return False
    return True

print(is_valid_schema({"username": "alice", "posts": 10, "verified": False})) # True.
print(is_valid_schema({"username": "carol", "posts": 15, "verified": True, "followers": 25})) # True.
print(is_valid_schema({"username": "frank", "posts": "21", "verified": True})) # False.
print(is_valid_schema({"username": "sam", "posts": 17, "verified": "false"})) # False.
print(is_valid_schema({"username": "bill", "verified": True})) # False.
print(is_valid_schema({"username": "fred", "verified": True})) # False.
print(is_valid_schema({"username": 5, "posts": 10, "verified": True})) # False.