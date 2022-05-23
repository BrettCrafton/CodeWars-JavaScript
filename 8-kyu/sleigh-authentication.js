function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return "Santa Claus" == name && "Ho Ho Ho!" == password;
};