function getOldest(people) {
  let [age, names] = [0, []];

  for (const person of people) {
    if (person.age > age) {
      age = person.age;
      names = [person.name];
    } else if (person.age === age) names.push(person.name);
  }

  return names;
}

console.log(getOldest([{ name: "Brenda", age: 40 }])); // ["Brenda"].
console.log(
  getOldest([
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
  ]),
); // ["Alice"].
console.log(
  getOldest([
    { name: "Allison", age: 25 },
    { name: "Bill", age: 30 },
    { name: "Carol", age: 30 },
  ]),
); // ["Bill", "Carol"].
console.log(
  getOldest([
    { name: "George", age: 50 },
    { name: "Shirley", age: 42 },
    { name: "Beth", age: 48 },
    { name: "Holly", age: 50 },
    { name: "Kevin", age: 44 },
    { name: "Frank", age: 47 },
    { name: "Zach", age: 50 },
    { name: "Jennifer", age: 43 },
  ]),
); // ["George", "Holly", "Zach"].
