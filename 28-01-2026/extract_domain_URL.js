function domainName(url) {
  let regExp = /http(s)?:\/\/|www./gi;
  return url.replace(regExp, "").split(".")[0];
}
