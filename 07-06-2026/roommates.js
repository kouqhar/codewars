function getRoommates(people) {
  const groups = {};

  for (const { name, group } of people) {
    if (!groups[group]) groups[group] = [name];
    else {
      const groupLen = groups[group].length;
      if (groups[group][groupLen - 1].includes(" and "))
        groups[group].push(name);
      else {
        const lastElem = groups[group].at(-1);
        groups[group][groupLen - 1] = `${lastElem} and ${name}`;
      }
    }
  }

  return Object.values(groups).flat(2);
}

console.log(
  getRoommates([
    { name: "Alice", group: "A" },
    { name: "Bob", group: "B" },
    { name: "Carol", group: "A" },
  ]),
); // ["Alice and Carol", "Bob"].
console.log(
  getRoommates([
    { name: "John", group: "C" },
    { name: "Julia", group: "C" },
    { name: "Jim", group: "C" },
  ]),
); // ["John and Julia", "Jim"].
console.log(
  getRoommates([
    { name: "Adam", group: "D" },
    { name: "Abraham", group: "E" },
    { name: "Austin", group: "E" },
    { name: "Augustus", group: "D" },
    { name: "Angelica", group: "D" },
    { name: "Aaron", group: "E" },
  ]),
); // ["Adam and Augustus", "Angelica", "Abraham and Austin", "Aaron"].
console.log(
  getRoommates([
    { name: "Frank", group: "A" },
    { name: "Emitt", group: "B" },
    { name: "Daria", group: "F" },
    { name: "Charles", group: "D" },
    { name: "Bailey", group: "A" },
    { name: "Albert", group: "F" },
  ]),
); // ["Frank and Bailey", "Emitt", "Daria and Albert", "Charles"].
console.log(
  getRoommates([
    { name: "Kevin", group: "A" },
    { name: "Yuri", group: "A" },
    { name: "Hugo", group: "B" },
    { name: "Violet", group: "A" },
    { name: "Brett", group: "A" },
    { name: "Wayne", group: "B" },
  ]),
); // ["Kevin and Yuri", "Violet and Brett", "Hugo and Wayne"].
