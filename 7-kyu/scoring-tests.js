function scoreTest(str, right, omit, wrong){
  return str.reduce((a, c) => a + (c == 0 ? right : c == 1 ? omit : -wrong), 0)
}