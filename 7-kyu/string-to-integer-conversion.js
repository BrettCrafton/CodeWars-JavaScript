function myParseInt(str) {
  return [...str].every(x => x < 10 ) ? +str : NaN
}