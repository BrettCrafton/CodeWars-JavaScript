// velocity will always be one number, negative or positive, as will friction.
function applyFriction(v,f){
 return v == 0 || Math.abs(f) > Math.abs(v)? 0 : v > 0 ? v - Math.abs(f) : v + Math.abs(f)
}