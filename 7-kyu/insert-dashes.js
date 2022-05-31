function insertDash(num) {
  return String(num).split("").map((x, i, arr) => arr[i] % 2 && arr[i + 1] % 2 ? x + "-" : x ).join("")
}