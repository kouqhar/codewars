def get_oldest(people):
  age, names = 0, [];

  for person in people:
    if person["age"] > age:
        age = person["age"];
        names = [person["name"]];
    elif person["age"] == age:
        names.append(person["name"]);

  return names


print(get_oldest([{ "name": "Brenda", "age": 40 }])) # ["Brenda"].
print(get_oldest([{ "name": "Alice", "age": 30 }, { "name": "Bob", "age": 25 }])) # ["Alice"].
print(get_oldest([{ "name": "Allison", "age": 25 }, { "name": "Bill", "age": 30 }, { "name": "Carol", "age": 30 }])) # ["Bill", "Carol"].
print(get_oldest([{ "name": "George", "age": 50 }, { "name": "Shirley", "age": 42 }, { "name": "Beth", "age": 48 }, { "name": "Holly", "age": 50 }, { "name": "Kevin", "age": 44 }, { "name": "Frank", "age": 47 }, { "name": "Zach", "age": 50 }, { "name": "Jennifer", "age": 43 }])) # ["George", "Holly", "Zach"].
