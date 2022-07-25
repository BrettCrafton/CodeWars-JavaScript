function sumDigits(number) {
  return String(Math.abs(number)).split("").reduce((a,c) => a+ +c, 0)
}