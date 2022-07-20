function countDevelopers(list) {
  return list.reduce((a,c) => a + (c.continent == "Europe" && c.language == "JavaScript"? 1 : 0), 0)
}