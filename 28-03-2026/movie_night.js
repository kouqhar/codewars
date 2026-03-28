function getMovieNightCost(day, showtime, numberOfTickets) {
  const weekend = ["Friday", "Saturday", "Sunday"];
  const weekday = ["Monday", "Wednesday", "Thursday"];
  let [[hour, minute], period, cost] = [
    showtime.slice(0, -2).split(":"),
    showtime.slice(-2),
    0,
  ];

  if (weekend.includes(day)) cost = 12.0;
  else if (weekday.includes(day)) cost = 10.0;
  else return `$${(5.0 * numberOfTickets).toFixed(2)}`;

  const totalCost = cost * numberOfTickets;
  const matinee =
    (period === "pm" && Number(hour) < 5) || period === "am"
      ? totalCost - 2.0 * numberOfTickets
      : totalCost;

  return `$${matinee.toFixed(2)}`;
}

console.log(getMovieNightCost("Saturday", "10:00pm", 1)); // "$12.00".
console.log(getMovieNightCost("Sunday", "10:00am", 1)); // "$10.00".
console.log(getMovieNightCost("Tuesday", "7:20pm", 2)); // "$10.00".
console.log(getMovieNightCost("Wednesday", "5:40pm", 3)); // "$30.00".
console.log(getMovieNightCost("Monday", "11:50am", 4)); // "$32.00".
console.log(getMovieNightCost("Friday", "4:30pm", 5)); // "$50.00".
console.log(getMovieNightCost("Tuesday", "11:30am", 1)); // "$5.00".
