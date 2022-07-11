const sequenceSum = (begin, end, step) => {
  return end < begin ? 0 : begin == end ? begin : Array(Math.floor((end - begin) / step) + 1).fill(begin).map((x,i) => x + i * step).reduce((a,c) => a + c, 0)
};