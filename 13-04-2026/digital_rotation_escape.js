function getRotation(n) {
  let [nLength, arr] = [`${n}`.length, `${n}`.split("")];

  for (let i = 0; i < nLength; i++) {
    let num = parseInt(arr.join(""));
    if (num % nLength === 0) return i;
    arr.push(arr.shift());
  }

  return "none";
}

console.log(getRotation(123)); // 0.
console.log(getRotation(13579)); // 3.
console.log(getRotation(24681)); // "none".
console.log(getRotation(84138789345)); // 6.
