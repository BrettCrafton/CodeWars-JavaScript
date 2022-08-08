function printerError(s) {
  let letters = "abcdefghijklm".split("")
  return s.split("").filter(x => !letters.includes(x)).length + "/" + s.length
}