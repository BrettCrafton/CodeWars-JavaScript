function mostFrequentItemCount(collection) {
  let obj = collection.reduce((a,c) => (a[c] = a[c] + 1 || 1,a), {})
  return Object.keys(obj) != 0 ? Math.max(...Object.values(obj)) :  0
}