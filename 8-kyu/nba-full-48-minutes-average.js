function pointsPer48(ppg, mpg) {
  let number = ppg / mpg * 48
  return ppg == 0 || mpg == 0 ? 0 : +number.toFixed(1)
}