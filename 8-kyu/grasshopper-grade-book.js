function getGrade (s1, s2, s3) {
  // Code here
  let score = 0
  let letterGrade
  score = (s1 + s2 + s3)/3
  if (score <= 100 && score >= 90){
    letterGrade = 'A'
  }
  else if (score < 90 && score >= 80){
    letterGrade = 'B'
  }
  else if (score < 80 && score >= 70){
    letterGrade = 'C'
  }
  else if (score < 70 && score >= 60){
    letterGrade = 'D'
  }
  else{
    letterGrade = 'F'
  }
    return letterGrade 
}