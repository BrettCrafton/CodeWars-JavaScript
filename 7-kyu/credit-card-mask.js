// return masked string
function maskify(cc) {
  return cc.length > 4 ? Array(cc.length - 4).fill("#").join("") + cc.slice(-4) : cc;
}