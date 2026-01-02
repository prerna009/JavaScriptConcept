function countCharacters(str) {
    let duplicatefreq = {}, dupCount = 0;
    for (let char of str) {
        duplicatefreq[char] = (duplicatefreq[char] || 0) + 1;
    }

    for (let char in duplicatefreq) {
        if (duplicatefreq[char] > 1) {
            dupCount ++;
        }
    }

    return dupCount;
}

let str = 'abbbcdeeeffgghijj';
console.log(countCharacters(str));

// Time Complexity: O(n)
// Space Complexity: O(n)