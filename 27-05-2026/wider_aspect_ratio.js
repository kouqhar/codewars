function getWiderAspectRatio(a, b) {
  const [aWidth, aHeight] = a.split("x").map(Number);
  const [bWidth, bHeight] = b.split("x").map(Number);
  const [aDiv, bDiv] = [aWidth / aHeight, bWidth / bHeight];
  const RATIOS = (w, h) => [Math.max(w, h), Math.min(w, h), [w, h]];

  let aspectRatio = RATIOS(aWidth, aHeight);
  if (bDiv > aDiv) aspectRatio = RATIOS(bWidth, bHeight);

  let aspectRatioMod = [aspectRatio[0], aspectRatio[1]];

  while (aspectRatioMod.at(-1) > 0) {
    const [prevMod, curMod] = aspectRatioMod.slice(-2);
    aspectRatioMod.push(prevMod % curMod);
  }

  const gcd = aspectRatioMod.at(-2);
  const finalAspectRatio = aspectRatio[2].map((dim) => dim / gcd).join(":");

  return finalAspectRatio;
}

console.log(getWiderAspectRatio("1920x1080", "800x600")); // "16:9".
console.log(getWiderAspectRatio("1080x1350", "2048x1536")); // "4:3".
console.log(getWiderAspectRatio("640x480", "2440x1220")); // "2:1".
console.log(getWiderAspectRatio("360x640", "1080x1920")); // "9:16".
console.log(getWiderAspectRatio("3440x1440", "2048x858")); // "43:18".
console.log(getWiderAspectRatio("12345x61234", "12534x51234")); // "2089:8539".
