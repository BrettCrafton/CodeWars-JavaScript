function ghostBusters(building) {
  let arr = building.split(" ")
  return arr.length == 1 ? "You just wanted my autograph didn't you?" : arr.join("")
}