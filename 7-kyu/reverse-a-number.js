function reverseNumber(n) {
  return n >= 0 ? +String(n).split("").reverse().join("") : -String(n).split("").slice(1).reverse().join("")
}