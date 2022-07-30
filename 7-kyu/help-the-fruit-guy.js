function removeRotten(bagOfFruits){
  return bagOfFruits == null || !bagOfFruits.length  ? [] : bagOfFruits.map(x => x.includes("rotten") ? x.slice(6).toLowerCase() : x)
}