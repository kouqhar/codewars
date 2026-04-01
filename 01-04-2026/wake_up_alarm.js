function alarmCheck(alarmTime, wakeTime) {
  const [atHr, atMin] = alarmTime.split(":").map(Number);
  const [wtHr, wtMin] = wakeTime.split(":").map(Number);

  if (atHr > wtHr || (atHr == wtHr && atMin > wtMin)) return "early";
  else if (alarmTime == wakeTime || (atHr == wtHr && wtMin - atMin <= 10))
    return "on time";
  else return "late";
}

console.log(alarmCheck("07:00", "06:45")); // "early".
console.log(alarmCheck("06:30", "06:30")); // "on time".
console.log(alarmCheck("08:10", "08:15")); // "on time".
console.log(alarmCheck("09:30", "09:45")); // "late".
console.log(alarmCheck("08:15", "08:25")); // "on time".
console.log(alarmCheck("05:45", "05:56")); // "late".
console.log(alarmCheck("04:30", "04:00")); // "early".
