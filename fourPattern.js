function printPattern(input) {
    let pattern = '';
    for (let i = 1; i <= input; i++) {
        for (let j = 0; j < input; j++) {
            pattern += (i + j * input) + ' ';
        }
        pattern += '\n';
    }
    return pattern;
}
const input = 5;
console.log(printPattern(input));