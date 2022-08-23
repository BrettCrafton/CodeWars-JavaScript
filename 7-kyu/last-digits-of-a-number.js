function lastDigit(n, d) {
  let arr = String(n).slice(-d).split("").map(x => +x)
    return d <=0 ? [] : arr
}