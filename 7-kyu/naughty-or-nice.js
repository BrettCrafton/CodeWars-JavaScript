function getNiceNames(people) {
  return people.filter(x => x.wasNice == true).map(x => x.name);
}

function getNaughtyNames(people) {
  return people.filter(x => x.wasNice == false).map(x => x.name);
}