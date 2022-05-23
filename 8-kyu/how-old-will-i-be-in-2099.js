function  calculateAge(birth, date) {
  if (birth == date) return "You were born this very year!"
  else if (birth - date == -1) return "You are 1 year old."
  else if (birth - date == 1) return "You will be born in 1 year."
  else if (birth > date) return `You will be born in ${birth - date} years.`
  else return `You are ${date - birth} years old.`
}