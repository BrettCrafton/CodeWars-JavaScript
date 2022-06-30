function colorOf(r,g,b){
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`  
  //or 
  function hex(color){
    return color.toString(16).padStart(2, '0')
  }
  return `#${hex(r)}${hex(g)}${hex(b)}`  
}