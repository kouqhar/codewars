function incrementString(strng) {
  let res = strng.match(/\d/g),
    r = strng.replace(/\d/g, "");
  if (res === null) return `${r + 1}`;
  else {
    const sum = Number(res.join("")) + 1;
    if (Number(res[res.length - 1]) < 9) {
      res[res.length - 1] = Number(res[res.length - 1]) + 1;
      return `${r + res.join("")}`;
    } else if (Number(res[0]) > 0) return `${r + sum}`;
    else return `${r + sum.toString().padStart(res.length, "0")}`;
  }
}
