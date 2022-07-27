function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  function pull(date){
      date = date.split(" ")
    let obj = {	
      January: "01",
      February: "02",
      March: "03",
      April: "04",	
      May: "05",
      June: "06",	
      July: "07",
      August: "08",
      September: "09",
      October: "10",
      November: "11",
      December: "12"
    }
    let month = obj[date[0]], day = date[1].slice(0, date[1].length -1), year = date[2]
    if(day.length < 2) day = "0" + day
    return [year, month, day].join("")
  }
  let cD = pull(currentDate), eD = pull(expirationDate)
  return enteredCode === correctCode && eD >= cD
}