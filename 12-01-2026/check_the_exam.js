function checkExam(array1, array2) {
  let score = 0;

  array1.forEach((ans, index) =>
    !array2[index] ? score : ans === array2[index] ? (score += 4) : (score -= 1)
  );

  return score < 0 ? 0 : score;
}
