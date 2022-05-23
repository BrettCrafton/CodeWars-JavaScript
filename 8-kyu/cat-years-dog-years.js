var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = humanYears < 2 ? 15 : humanYears < 3 ? 24 : (humanYears - 2) * 4 + 24
    let dogYears = humanYears < 2 ? 15 : humanYears < 3 ? 24 : (humanYears - 2) * 5 + 24
  return [humanYears,catYears,dogYears];
}