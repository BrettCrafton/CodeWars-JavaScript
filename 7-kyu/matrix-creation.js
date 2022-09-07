function getMatrix(number) {
  return Array(number).fill(Array(number).fill(0)).map((x,i) => x.map((e,idx) => idx == i ? 1 : e))
}