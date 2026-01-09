def multiply(num):
    multiplication = 1
    for i in range(len(str(num))):
        multiplication *= int(str(num)[i])
        
    return multiplication

def persistence(n: int) -> int:
    counts = 0
    
    if len(str(n)) < 2:
        return counts
    else:
        while True:
            n = multiply(n)
            counts += 1
            if len(str(n)) < 2:
                break
        
    return counts