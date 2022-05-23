function century(year) {
    if(year.length <= 2){
      return "1"
    }
    else {
      let stringYear = String(year)
      let goof = stringYear.split('')
      return goof[goof.length -1] == '0' && goof[goof.length -2] == '0' ? Number(goof.slice(0, -2).join('')) : Number(goof.slice(0, -2).join(''))+1 
    }
  
  }