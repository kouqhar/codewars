function canDonate(donor, recipient) {
  const letter_rule = {
    O: ["A", "B", "AB", "O"],
    A: ["A", "AB"],
    B: ["B", "AB"],
    AB: ["AB"],
  };

  const rh_rule = {
    "-": ["-", "+"],
    "+": ["+"],
  };

  const [donor_letter, donor_rh] = [donor.slice(0, -1), donor.slice(-1)];
  const [recipient_letter, recipient_rh] = [
    recipient.slice(0, -1),
    recipient.slice(-1),
  ];

  if (
    !letter_rule[donor_letter].includes(recipient_letter) ||
    !rh_rule[donor_rh].includes(recipient_rh)
  )
    return false;

  return true;
}

console.log(canDonate("A+", "AB+")); // True
console.log(canDonate("O+", "A-")); // False
console.log(canDonate("O-", "AB-")); // True
console.log(canDonate("B+", "B+")); // True
