def get_roommates(people):
    groups = {}
    
    for person in people:
        name, group = person["name"], person["group"]
        if group not in groups:
            groups[group] = [name]
        else:
            if " and " in groups[group][-1]:
                groups[group].append(name)
            else:
                last_elem = groups[group][-1]
                groups[group][-1] = f"{last_elem} and {name}"

    return [person for group in groups.values() for person in group]

print(get_roommates([{ "name": "Alice", "group": "A" }, { "name": "Bob", "group": "B" }, { "name": "Carol", "group": "A" }])) # ["Alice and Carol", "Bob"].
print(get_roommates([{ "name": "John", "group": "C" }, { "name": "Julia", "group": "C" }, { "name": "Jim", "group": "C" }])) # ["John and Julia", "Jim"].
print(get_roommates([{ "name": "Adam", "group": "D" }, { "name": "Abraham", "group": "E" }, { "name": "Austin", "group": "E" }, { "name": "Augustus", "group": "D" }, { "name": "Angelica", "group": "D" }, { "name": "Aaron", "group": "E" }])) # ["Adam and Augustus", "Angelica", "Abraham and Austin", "Aaron"].
print(get_roommates([{ "name": "Frank", "group": "A" }, { "name": "Emitt", "group": "B" }, { "name": "Daria", "group": "F" }, { "name": "Charles", "group": "D" }, { "name": "Bailey", "group": "A" }, { "name": "Albert", "group": "F" }])) # ["Frank and Bailey", "Emitt", "Daria and Albert", "Charles"].
print(get_roommates([{ "name": "Kevin", "group": "A" }, { "name": "Yuri", "group": "A" }, { "name": "Hugo", "group": "B" }, { "name": "Violet", "group": "A" }, { "name": "Brett", "group": "A" }, { "name": "Wayne", "group": "B" }])) # ["Kevin and Yuri", "Violet and Brett", "Hugo and Wayne"].