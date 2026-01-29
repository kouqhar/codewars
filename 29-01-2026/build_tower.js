const towerBuilder = (nFloors) => {
  let tower = [];
  let newArr = [];

  for (let i = 0; i < nFloors; i++) {
    let star = "*";
    if (i >= 1) star += tower[tower.length - 1] + "*";
    tower.push(star);
  }

  let index = tower.length - 1;
  tower.forEach((elem, idx) => {
    let finalArr = "";
    while (index > idx) {
      finalArr += " ";
      index--;
    }
    index = tower.length - 1;
    finalArr += elem;
    while (idx < index) {
      finalArr += " ";
      idx++;
    }

    newArr.push(finalArr);
  });

  return newArr;
};
