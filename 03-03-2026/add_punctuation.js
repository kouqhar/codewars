function addPunctuation(sentences) {
  sentences = sentences.replace(/\s(?=[A-Z])/g, ". ");
  return sentences.endsWith(".") ? sentences : `${sentences}.`;
}

console.log(addPunctuation("Hello world This is a test")); // "Hello world. This is a test."
console.log(addPunctuation("This is another test")); // "This is another test."
console.log(addPunctuation("NoPunctuationHere")); // "NoPunctuationHere."
console.log(addPunctuation("Multiple Sentences Here And There")); // "Multiple Sentences Here. And There."
