function solution(string) {
  let regExp = /[A-Z]/g,
    mchStr = string.match(regExp),
    sptStr = string.split(regExp);
  return sptStr
    .map((str, idx) => (idx > 0 ? `${mchStr[idx - 1]}${str}` : str))
    .join(" ");
}
