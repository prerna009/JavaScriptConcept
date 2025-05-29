//Pattern - 1
// 5 5 5 5 5 * * * * *
// * * * *     4 4 4 4
// 3 3 3         * * *
// * *             2 2
// 1                 *

function starNumberPattern(n) {
    let pattern = '';
    for(let i=n;i>=1;i--) {
        for(let j=1;j<=i;j++) {
            if(i%2 !== 0) {
                pattern += i + ' ';
            } else {
                pattern += '* ';
            }
        }
        for(let j=1;j<=2*(n-i);j++) {
            pattern += '  ';
        }
        for(let j=i;j>=1;j--) {
            if(i%2 === 0) {
                pattern += i + ' ';
            } else {
                pattern += '* ';
            }
        }
        pattern += '\n';
    }
    return pattern;
}

console.log(starNumberPattern(5));

//Pattern - 2
// 5 5 5 5 5 * * * * * 
// * * * * * 4 4 4 4 4
// 3 3 3 3 3 * * * * *
// * * * * * 2 2 2 2 2
// 1 1 1 1 1 * * * * *

function starNumberPattern2(n) {
    let pattern = '';
    for(let i=n;i>=1;i--) {
        for(let j=1;j<=n;j++) {
            if(i%2 !== 0) {
                pattern += i + ' ';
            } else {
                pattern += '* ';
            }
        }
        for(let j=n;j>=1;j--) {
            if(i%2 === 0) {
                pattern += i + ' ';
            } else {
                pattern += '* ';
            }
        }
        pattern += '\n';
    }
    return pattern;
}

console.log(starNumberPattern2(5));