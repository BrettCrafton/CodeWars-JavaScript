function dateNbDays(a0, a, p) {
  let days = 0
  while(a0 < a){
        a0 *= (1 + (p/36000))
        days++
      }
  function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}   
  let date = addDays("2016-01-01", days)
  const year = date.getFullYear();
  const month = padTo2Digits(date.getMonth() + 1);
  const day = padTo2Digits(date.getDate())
  return [year, month, day].join('-');
}  
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
  }