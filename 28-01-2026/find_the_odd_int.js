const findOdd = (arr) => {
  let [cacheObj, cacheEntries] = [{}, {}];

  arr.forEach((elem) => {
    if (cacheObj[elem] === undefined) cacheObj[elem] = 0;
    else cacheObj[elem] += 1;
  });

  for (let [keys, values] of Object.entries(cacheObj)) {
    if (cacheEntries[values] === undefined) cacheEntries[values] = 0;
    else cacheEntries[values] += 1;
  }

  let min = Math.min(...Object.values(cacheEntries)),
    key = [],
    finalKey = 0;
  for (let [keys, values] of Object.entries(cacheEntries))
    if (values == min) key.push(keys);
  for (let [keys, values] of Object.entries(cacheObj))
    if (values == key[0]) finalKey = keys;

  return Number(finalKey);
};
