module.exports = function reverse(n) {
    return n
        .toString()
        .split("")
        .reverse()
        .filter(element => !isNaN(element))
        .join("");
}
