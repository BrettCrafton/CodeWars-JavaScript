function count(array){
  const counts = {};
array.forEach((el) => {
  counts[el] = counts[el] ? (counts[el] += 1) : 1;
});
  return counts
}