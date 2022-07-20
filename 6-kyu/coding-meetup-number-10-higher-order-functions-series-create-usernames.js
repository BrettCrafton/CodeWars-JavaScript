function addUsername(list) {
    
    list.forEach(x =>
     x.username = `${x.firstName.toLowerCase()}${x.lastName[0].toLowerCase()}${new Date().getFullYear() - x.age}`);
 
      return list;
  }