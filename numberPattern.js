function generatePattern(rows) {
    let pattern = '';
    for (let i = 1; i <= rows; i++) {
        let a = i;
        for (let j = 1; j <= i; j++) {
            pattern += a + ' ';
            a += rows - j;
        }
        pattern += '\n';
    }
    return pattern;
}
console.log(generatePattern(5));