function validate(username, password){
  console.log(arguments)
  var database = new Database();
  if(username.split("").includes("|") || username.split("").includes("/") || password.split("").includes("|") || password.split("").includes("/")){
    return 'Wrong username or password!'
  }
  else{
    return database.login(username, password);
  }

  
}