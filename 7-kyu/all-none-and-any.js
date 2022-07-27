Array.prototype.all = function (p) {
  return !this.map(x => p(x)).includes(false)
};

Array.prototype.none = function (p) {
  return !this.map(x => p(x)).includes(true)
};

Array.prototype.any = function (p) {
  return this.map(x => p(x)).includes(true)
};