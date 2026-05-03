function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join(".")
    .concat(".");
}

console.log(getInitials("Tommy Millwood")); // "T.M."
console.log(getInitials("Savanna Puddlesplash")); // "S.P."
console.log(getInitials("Frances Cowell Conrad")); // "F.C.C."
console.log(getInitials("Dragon")); // "D."
console.log(getInitials("Dorothy Vera Clump Haverstock Norris")); // "D.V.C.H.N."
