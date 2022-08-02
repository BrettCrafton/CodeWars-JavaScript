function duplicateElements(m, n) {
    return [...new Set(m.concat(n))].length < [...new Set(m)].length + [...new Set(n)].length
}