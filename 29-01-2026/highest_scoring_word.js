function high(x){
  let [word, scores] = [[], []]
  
  x.split(" ").forEach(letter => {
    word.push(letter)
    let score = letter.split("").map(alphabet => alphabet.charCodeAt(0) & 31)
    .reduce((acc, cur) => acc + cur, 0)
    scores.push(score)
  })
  
  const index = scores.indexOf(Math.max(...scores))
  return word[index]

}