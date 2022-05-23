function generateLink(user) {
console.log(user);
    return "http://www.codewars.com/users/" + encodeURIComponent(user);
}