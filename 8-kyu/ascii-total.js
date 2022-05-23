function uniTotal (string) {
  return string.split("").map(x => x.charCodeAt(0)).reduce((a, b) => a + b, 0);
}