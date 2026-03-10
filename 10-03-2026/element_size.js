function getElementSize(windowSize, elementVw, elementVh) {
  const [windowWidth, windowHeight] = windowSize.split(" x ");
  const [elementWidth, elementHeight] = [
    (parseInt(elementVw) / 100) * Number(windowWidth),
    (parseInt(elementVh) / 100) * Number(windowHeight),
  ];
  return `${elementWidth} x ${elementHeight}`;
}

console.log(getElementSize("1200 x 800", "50vw", "50vh")); // "600 x 400"
console.log(getElementSize("320 x 480", "25vw", "50vh")); // "80 x 240"
console.log(getElementSize("1000 x 500", "7vw", "3vh")); // "70 x 15"
console.log(getElementSize("1920 x 1080", "95vw", "100vh")); // "1824 x 1080"
console.log(getElementSize("1200 x 800", "0vw", "0vh")); // "0 x 0"
console.log(getElementSize("1440 x 900", "100vw", "114vh")); // "1440 x 1026"
