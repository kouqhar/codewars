String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((elem) => `${elem.charAt(0).toUpperCase()}${elem.substr(1)}`)
    .join(" ");
};
