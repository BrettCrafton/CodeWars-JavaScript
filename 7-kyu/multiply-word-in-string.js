function modifyMultiply (str,loc,num) {
  let res = (str.split(' ')[loc] + '-').repeat(num);
  return res.slice(0, res.length-1);
}