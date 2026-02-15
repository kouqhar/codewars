function getFastestSpeed(times) {
  let result = [0, "segment 0"];
  const meters = [320, 280, 350, 300, 250];

  times.forEach((time, idx) => {
    const calculation = (meters[idx] / time).toFixed(2);

    calculation > result[0] ? (result = [calculation, idx + 1]) : false;
  });

  return `The luger's fastest speed was ${result[0]} m/s on segment ${result[1]}.`;
}

console.log(getFastestSpeed([9.523, 8.234, 10.012, 9.001, 7.128]));
// Output: The luger's fastest speed was 35.07 m/s on segment 5..
console.log(getFastestSpeed([9.381, 7.417, 9.912, 8.815, 7.284]));
// Output: The luger's fastest speed was 37.75 m/s on segment 2.
console.log(getFastestSpeed([8.49, 7.732, 10.103, 8.489, 6.84]));
// Output: The luger's fastest speed was 36.69 m/s on segment 1.
