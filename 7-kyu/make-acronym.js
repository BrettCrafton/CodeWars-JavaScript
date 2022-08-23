function toAcronym(inp) {
    return inp.split(' ').map(x => x[0]).join('').toUpperCase();
}