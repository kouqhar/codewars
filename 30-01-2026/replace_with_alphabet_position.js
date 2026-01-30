function alphabetPosition(text) {
  return text
    .replace(/[\d|\W|_]/g, "")
    .split("")
    .map((letter) => letter.charCodeAt(0) & 31)
    .join(" ");
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The narwhal bacons at midnight."));
