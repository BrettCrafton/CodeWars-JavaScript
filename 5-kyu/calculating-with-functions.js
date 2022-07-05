function math(n, fn) {
    return (fn) ? fn.call(fn, n) : n;
}

function zero(fn)  { return math(0, fn); }
function one(fn)   { return math(1, fn); }
function two(fn)   { return math(2, fn); }
function three(fn) { return math(3, fn); }
function four(fn)  { return math(4, fn); }
function five(fn)  { return math(5, fn); }
function six(fn)   { return math(6, fn); }
function seven(fn) { return math(7, fn); }
function eight(fn) { return math(8, fn); }
function nine(fn)  { return math(9, fn); }

function plus(num)      { return function(res) { return res + num; } }
function minus(num)     { return function(res) { return res - num; } }
function times(num)     { return function(res) { return res * num; } }
function dividedBy(num) { return function(res) { return Math.floor(res / num); } }