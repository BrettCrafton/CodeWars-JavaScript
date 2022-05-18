function countWords(str) {
  let trimmed = str.replace(/\s/g, ' ').trim()
  return str == "" ? 0 : trimmed.split(" ").filter(x => x != "").length
}