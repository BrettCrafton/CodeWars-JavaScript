function liveRatings(list){
  list.forEach(x=> x.rating = x.rating + x.points)
  let sorted = list.sort((a,b) => b.rating - a.rating)
  sorted.forEach((x, i) => x.rank = i+1 )
return sorted
}