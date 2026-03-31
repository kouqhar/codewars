function getDueDate(dateStr) {
  let [year, month, day] = dateStr.split("-").map(Number);
  const nineMonthsLater = month + 9;
  const dueYear = nineMonthsLater > 12 ? year + 1 : year;
  const dueMonth =
    nineMonthsLater > 12 ? nineMonthsLater - 12 : nineMonthsLater;
  const dueDay =
    day > 28 && dueMonth === 2
      ? 28
      : day > 30 && [4, 6, 9, 11].includes(dueMonth)
        ? 30
        : day;

  return `${dueYear.toString().padStart(4, "0")}-${dueMonth.toString().padStart(2, "0")}-${dueDay.toString().padStart(2, "0")}`;
}

console.log(getDueDate("2025-03-30")); // "2025-12-30".
console.log(getDueDate("2025-04-27")); // "2026-01-27".
console.log(getDueDate("2025-05-29")); // "2026-02-28".
console.log(getDueDate("2026-06-30")); // "2027-03-30".
console.log(getDueDate("2026-10-11")); // "2027-07-11".
