function evil(n) {
  let numOf1 = n.toString(2).split("").filter(x => x == 1)
    return numOf1.length % 2 == 0 ?  "It's Evil!" : "It's Odious!"
}