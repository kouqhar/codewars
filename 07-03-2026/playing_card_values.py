import re
def card_values(cards):
    card = []

    for i in range(len(cards)):
        validCards = re.sub(r"[SCDH]", "", cards[i])
        faceCards = re.sub(r"[JQK]", "10", validCards)
        card.append(int(re.sub(r"A", "1", faceCards)))

    return card



print(card_values(["AS", "KS"])); # [1, 10].
print(card_values(["3H", "4D", "5S"])); # [3, 4, 5].
print(card_values(["AS", "10S", "10H", "6D", "7D"])); # [1, 10, 10, 6, 7].
print(card_values(["8D", "QS", "2H", "JC", "9C"])); # [8, 10, 2, 10, 9].
print(card_values(["10H", "JH", "QH", "KH", "AH"])); # [10, 10, 10, 10, 1].