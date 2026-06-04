def is_valid_schema(obj):
    if "username" not in obj or not isinstance(obj["username"], str):
        return False

    return True

print(is_valid_schema({ "username": "bob" })) # true.
print(is_valid_schema({ "username": "jen", "posts": 30 })) # true.
print(is_valid_schema({ "username": "" })) # true.
print(is_valid_schema({ "username": 7 })) # false.
print(is_valid_schema({ "posts": 25 })) # false.
