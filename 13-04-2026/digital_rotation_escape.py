def get_rotation(n):
    nLength, arr = len(str(n)), list(str(n))
    
    for i in range(nLength):
        num = int("".join(arr))
        if num % nLength == 0:
            return i
        arr.append(arr.pop(0))

    return "none"

print(get_rotation(123)) # 0.
print(get_rotation(13579)) # 3.
print(get_rotation(24681)) # "none".
print(get_rotation(84138789345)) # 6.