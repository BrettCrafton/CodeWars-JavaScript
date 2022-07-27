function wordSearch(query, seq){
  let res = seq.filter(x => x.toLowerCase().includes(query.toLowerCase()))
  return res.length? res : ["Empty"]
}