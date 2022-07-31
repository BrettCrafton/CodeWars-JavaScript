function findEmployeesRole(name) {
  name = name.split(" ")
  return employees.some(x => x.firstName == name[0] && x.lastName == name[1]) ? employees[employees.findIndex(x => x.firstName == name[0] && x.lastName == name[1])]["role"] : "Does not work here!"
}