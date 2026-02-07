const XO = str => {
  str = str.toLowerCase().split('')
  let [xs, os] = [[], []]

  str.filter(letter => {
    if(letter === 'x') xs.push(letter)
    else if(letter === 'o') os.push(letter)
    else return letter
  })
  
  return xs.length === os.length
}