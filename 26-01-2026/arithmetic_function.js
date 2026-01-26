function arithmetic(a, b, operator) {
  let resultNum = 0;
  switch (operator) {
    case "add":
      resultNum = a + b;
      break;
    case "subtract":
      resultNum = a - b;
      break;
    case "multiply":
      resultNum = a * b;
      break;
    case "divide":
      resultNum = a / b;
      break;
    default:
      resultNum = 0;
  }
  return resultNum;
}
