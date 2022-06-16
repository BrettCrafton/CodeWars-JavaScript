function getParticipants(h){
  return h == 0 ? 0 : Math.ceil((1 + Math.sqrt(1 + 8 * h))/2)
}