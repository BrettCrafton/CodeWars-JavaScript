function deepCount(a, counter = 0){
  for (let element of a) {
    if (Array.isArray(element)) {
      counter++
        counter = deepCount(element, counter)
    } else {
      counter ++ 
    }
  }
  return counter;
}