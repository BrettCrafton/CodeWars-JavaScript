function bingo(a) {

  let bingo = [2,9,14,7,15]
  return bingo.every(x => a.includes(x)) ? 'WIN' : 'LOSE'

}