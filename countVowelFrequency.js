function countVowelFrequency(str) {
    let vowelfreq = {};
    for (let char of str.toLowerCase()) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowelfreq[char] = (vowelfreq[char] || 0) + 1;
        }
    }

    return vowelfreq;
}

let str = 'aabbbbbbehihgshgo';
console.log(countVowelFrequency(str));