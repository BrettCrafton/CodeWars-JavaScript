var FilterString = function(value) {
  return +value.split("").filter(x => x < 10).join("")
}