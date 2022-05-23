function nextId(ids){
  return [...new Set(ids)].sort((a,b) => a - b).findIndex((x, i) => x != i) == -1 ? [...new Set(ids)].length : [...new Set(ids)].sort((a,b) => a - b).findIndex((x, i) => x!= i)
}