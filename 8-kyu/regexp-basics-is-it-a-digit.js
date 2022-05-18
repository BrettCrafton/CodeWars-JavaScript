String.prototype.digit = function() {
  return RegExp('^[0-9]$').test(this)
};

// '^[0-9]*$'