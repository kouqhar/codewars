const number = (busStops) => {
  let [into, off] = [[], []];

  for (let i = 0; i < busStops.length; i++) {
    into.push(busStops[i][0]);
    off.push(busStops[i][1]);
  }

  let intoBus = into.reduce((a, b) => a + b, 0);
  let offBus = off.reduce((a, b) => a + b, 0);

  return intoBus - offBus;
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ]),
);
