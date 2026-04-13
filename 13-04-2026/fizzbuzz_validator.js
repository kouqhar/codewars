function isFizzBuzz(arr) {
  const foundDigitIndex = arr.findIndex((elem) => typeof elem === "number");
  const digit = arr[foundDigitIndex];
  const firstDigit = digit - foundDigitIndex;
  const numArray = Array.from({ length: arr.length }, (_, i) => firstDigit + i);

  for (let i = 0; i < numArray.length; i++) {
    const currentElem = numArray[i];
    const [elementIsFizz, elementIsBuzz] = [
      currentElem % 3 === 0,
      currentElem % 5 === 0,
    ];
    numArray.splice(
      i,
      1,
      elementIsFizz && elementIsBuzz
        ? "FizzBuzz"
        : elementIsFizz
          ? "Fizz"
          : elementIsBuzz
            ? "Buzz"
            : currentElem,
    );
  }

  return arr.join(",").trim() === numArray.join(",").trim();
}

console.log(isFizzBuzz([1, 2, "Fizz", 4, "Buzz"])); // true.
console.log(isFizzBuzz([13, 14, "FizzBuzz", 16, 17])); // true.
console.log(isFizzBuzz([1, 2, "Fizz", 4, 5])); // false.
console.log(isFizzBuzz(["FizzBuzz", 16, 17, "Fizz", 19, "Buzz"])); // true.
console.log(isFizzBuzz([1, 2, "Fizz", "Buzz", 5])); // false.
console.log(isFizzBuzz([97, 98, "Buzz", "Fizz", 101, "Fizz", 103])); // false.
console.log(isFizzBuzz(["Fizz", "Buzz", 101, "Fizz", 103, 104, "FizzBuzz"])); // true.
