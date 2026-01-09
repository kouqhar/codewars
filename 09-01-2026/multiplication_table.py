def multiplication_table(size: int) -> list[list[int]]:
    finalArr = []
    for n in range(1, size + 1):
        innerArr = [n]
        for add in range(1,size):
            lastElem = innerArr[-1]
            innerArr.append(lastElem + n)

        finalArr.append(innerArr)

    return finalArr