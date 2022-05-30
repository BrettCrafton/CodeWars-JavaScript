var capitals = function (word) {
  return word.split("").map((x,i) => x != x.toLowerCase() ? i : x).filter(x => typeof x == 'number')
};