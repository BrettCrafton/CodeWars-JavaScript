function musicalOCD(volume){
  return (volume +2) % 3 == 0 ? 1 : (volume +4) % 3 == 0 ? 2 : 3
};