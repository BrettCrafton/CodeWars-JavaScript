function toTime(seconds) {
let minutes = Math.floor(seconds / 60) % 60;
let hours = Math.floor((seconds / 3600));

return (`${hours} hour(s) and ${minutes} minute(s)`)
}