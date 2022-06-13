function bmi(w, h) {
  let bmi = w / h / h
  let string
  if(bmi<=15){
    string = "Very severely underweight"
  }
  else if(bmi<=16){
    string = "Severely underweight"
  }
  else if(bmi<=18.5){
    string = "Underweight"
  }
  else if(bmi<=25){
    string = "Normal (healthy weight)"
  }
  else if(bmi<=30){
    string = "Overweight"
  }
  else if(bmi<=35){
    string = "Moderately obese"
  }
  else if(bmi<=40){
    string = "Severely obese"
  }
  else{
    string = "Very severely obese"
  }
  return string
}