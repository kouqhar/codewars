function countBusinessDays(start, end) {
  let [startDate, endDate, businessDays] = [new Date(start), new Date(end), 0];

  // Loop through each date from start to end
  // Check if it's a weekday
  // 0 = Sunday, 6 = Saturday
  for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1))
    if (date.getDay() !== 0 && date.getDay() !== 6) businessDays++;

  return businessDays;
}

console.log(countBusinessDays("2026-02-24", "2027-02-24")); // 262
console.log(countBusinessDays("2026-03-08", "2026-03-17")); // 7
console.log(countBusinessDays("2026-02-21", "2026-03-01")); // 5
console.log(countBusinessDays("2026-02-24", "2026-02-28")); // 4
console.log(countBusinessDays("2026-02-24", "2026-02-26")); // 3
