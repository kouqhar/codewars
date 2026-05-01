def get_initials(name):
    name = name.split()
    name = [n[0] for n in name]
    
    return ".".join(name) + "."

print(get_initials("Tommy Millwood")); # "T.M."
print(get_initials("Savanna Puddlesplash")); # "S.P."
print(get_initials("Frances Cowell Conrad")); # "F.C.C."
print(get_initials("Dragon")); # "D."
print(get_initials("Dorothy Vera Clump Haverstock Norris")); # "D.V.C.H.N."
