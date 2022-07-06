var collatzCount = function(n, acc = 0) {
  if (n <= 1) {
    return acc;
  } else {
    return collatzCount(n%2==0 ? n/2 : 3*n+1, acc+1);
  }
}