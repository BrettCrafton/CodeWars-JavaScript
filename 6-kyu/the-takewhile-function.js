function span(arr, predicate) {
  for(var i = 0; i<arr.length && predicate(arr[i]); i++);
  return [arr.slice(0,i), arr.slice(i)];
}


function takeWhile (arr, pred) {
  return span(arr, pred)[0]
}