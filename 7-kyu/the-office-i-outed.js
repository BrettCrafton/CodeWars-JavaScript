function outed(meet, boss){
  let avg = (Object.values(meet).reduce((a,c) => a + c, 0) + (meet[boss] ? meet[boss] : 0)) / Object.values(meet).length 
  return avg <= 5 ? 'Get Out Now!': 'Nice Work Champ!'
}