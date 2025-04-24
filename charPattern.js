// Given a non-empty string like 'Code' return a string like 'CCoCodCode'.
// stringSplosion('Code') → 'CCoCodCode'
// stringSplosion('abc') → 'aababc'
// stringSplosion('ab') → 'aab'

function stringSplosion(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < i + 1; j++) {
            res += str[j];
        }
    }
    return res;
}

console.log(stringSplosion('Code'));
console.log(stringSplosion('abc'));
console.log(stringSplosion('ab'));