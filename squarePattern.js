//Pattern 1
// * * * * *
// * *   * *
// *       *
// * *   * *
// * * * * *

function squarePattern(n) {
    let pattern = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i == 1 || i == n || j == 1 || j == n || j == n - i + 1 || j == i) {
                pattern += '* ';
            } else {
                pattern += '  ';
            }
        }
        pattern += '\n';
    }
    return pattern;
}
console.log(squarePattern(18));

//Pattern 2
// * * * * *
// *       *
// *       *
// *       *
// * * * * *

function borderSquarePattern(n) {
    let pattern = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i == 1 || i == n || j == 1 || j == n) {
                pattern += '* ';
            } else {
                pattern += '  ';
            }
        }
        pattern += '\n';
    }
    return pattern;
}
console.log(borderSquarePattern(8));