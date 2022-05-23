function isValidWalk(walk) {
  let n = 0, s = 0, w = 0, e = 0
    n = walk.filter(x => x === 'n').length
    s = walk.filter(x => x === 's').length
    w = walk.filter(x => x === 'w').length
    e = walk.filter(x => x === 'e').length
  return walk.length === 10 && n - s == 0 && w - e == 0
}