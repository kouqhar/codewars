function fizzBuzzCount(start, end) {
  const numArray = {
    fizz: 0,
    buzz: 0,
  };

  for (let i = start; i <= end; i++) {
    const [elementIsFizz, elementIsBuzz] = [i % 3 === 0, i % 5 === 0];

    if (elementIsFizz) numArray["fizz"] += 1;
    if (elementIsBuzz) numArray["buzz"] += 1;
  }

  return numArray;
}

console.log(fizzBuzzCount(1, 11)); // {"fizz": 3, "buzz": 2}.
console.log(fizzBuzzCount(14, 41)); // {"fizz": 9, "buzz": 6}.
console.log(fizzBuzzCount(24, 100)); // {"fizz": 26, "buzz": 16}.
console.log(fizzBuzzCount(-635, -14)); // {"fizz": 207, "buzz": 125}.
console.log(fizzBuzzCount(-5432, 6789)); // {"fizz": 4074, "buzz": 2444}.
