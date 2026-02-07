const disemvowel = (str) => str.match(/[^aeiou]/gi).join("");

console.log(disemvowel("This website is for losers LOL!"));
