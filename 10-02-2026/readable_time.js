const humanReadable = (seconds) => {
  let [hour, minute, second] = [0, 0, 0];

  while (seconds !== 0) {
    if (seconds >= 3600) {
      hour += 1;
      seconds -= 3600;
    } else if (seconds >= 60) {
      minute += 1;
      seconds -= 60;
    } else {
      second = seconds;
      seconds -= seconds;
    }
  }

  return [hour, minute, second]
    .map((elem) => (elem > 9 ? elem : `0${elem}`))
    .join(":");
};
