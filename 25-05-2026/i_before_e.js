function iBeforeE(sentence) {
  return sentence.replace(/(?<!c)ei/g, "ie").replace(/cie/g, "cei");
}

console.log(iBeforeE("beleive")); // "believe".
console.log(iBeforeE("recieve")); // "receive".
console.log(iBeforeE("we recieved a breif")); // "we received a brief".
console.log(
  iBeforeE("she beleived the friendly niece could percieve the greif"),
); // "she believed the friendly niece could perceive the grief".
console.log(
  iBeforeE(
    "we recieved relief after the theif gave us a breif piece of feirce deceit",
  ),
); // "we received relief after the thief gave us a brief piece of fierce deceit".
