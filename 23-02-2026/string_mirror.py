def mirror(s):
    return s + s[::-1]

print(mirror("The quick brown fox...")); # "The quick brown fox... ...xof nworb kciuq ehT"
print(mirror("helloworld")); # "helloworlddlrowolleh"
print(mirror("RaceCar")); # "RaceCarraCecaR"
print(mirror("freeCodeCamp")); # "freeCodeCamppmaCedoCeerf"
