function checkExam(array1, array2) {
  let score = array1.reduce((a,c, i) => a + (c == array2[i] ? 4 : array2[i] == "" ? 0 : -1), 0)
  return score < 0 ? 0 : score
}