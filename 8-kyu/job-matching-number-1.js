function match(candidate, job) {
  if(candidate.minSalary && job.maxSalary){
    return candidate.minSalary * .9 <= job.maxSalary * 1.1
  }
  else{
    throw "error"
  }
}