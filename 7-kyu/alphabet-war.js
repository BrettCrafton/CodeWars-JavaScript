function alphabetWar(fight){
  let letters = {
     w: -4,
     p: -3,
     b: -2,
     s: -1,
     m: 4,
     q: 3,
     d: 2,
     z: 1
  }
  let score = fight.split("").map(x => letters[x] ? letters[x] : 0).reduce((a,c) => a+c, 0)

   return  score ==0 ? "Let's fight again!" : score > 0 ? "Right side wins!" : "Left side wins!"
}