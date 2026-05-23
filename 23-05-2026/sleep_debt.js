function sleepDebt(hoursSlept, targetHours) {
  const total_hours_slept = hoursSlept.reduce((acc, cur) => acc + cur, 0);
  const total_target_hours = targetHours * (hoursSlept.length + 1);
  const sleep_debt = total_target_hours - total_hours_slept;

  return sleep_debt > 0 ? sleep_debt : 0;
}

console.log(sleepDebt([6, 6, 6, 6, 6, 6], 8)); // 20.
console.log(sleepDebt([6, 7, 8, 4, 8, 6], 7)); // 10.
console.log(sleepDebt([10, 10, 9, 10, 9, 11], 9)); // 4.
console.log(sleepDebt([8, 7, 6, 7, 6, 8], 6)); // 0.
console.log(sleepDebt([8, 9, 10, 9, 10, 7], 7)); // 0.
