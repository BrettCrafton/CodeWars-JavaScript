function orderFood(list) {
  var count = {};
  list.forEach(x => count[x.meal] = (count[x.meal] || 0) + 1);
  return count;
}