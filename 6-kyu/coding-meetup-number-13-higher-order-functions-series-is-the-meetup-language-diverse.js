function isLanguageDiverse(list) {
    var count = {};
  list.forEach(x => count[x.language] = (count[x.language] || 0) + 1);
  let values = Object.values(count)
  return Math.max(...values) / Math.min(...values) <= 2
}