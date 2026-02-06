let getCount = (str) => {
  let [regExp, count] = [/[aeiou]/gi, 0];

  while (regExp.test(str)) count++;

  return count;
};
