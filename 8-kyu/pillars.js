function pillars(num_pill, dist, width) {
  return num_pill==1? 0 : (num_pill-2)*width+(num_pill-1)*dist*100;
}