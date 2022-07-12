var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {
    this._friends = this._friends.concat(f);
    }
  }
  return person;
}