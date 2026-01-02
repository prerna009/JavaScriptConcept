function countUniqueCharcters(str) {
    let uniqueFreq = {}, uniqueCount = 0;
    for (let char of str) {
        uniqueFreq[char] = (uniqueFreq[char] || 0) + 1;
    }

    for (let c in uniqueFreq) {
        if (uniqueFreq[c] === 1) {
            uniqueCount++;
        }
    }

    return uniqueCount;
}

let str = 'abbbcdeeeffggjj';
console.log(countUniqueCharcters(str));