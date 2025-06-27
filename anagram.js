function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    let freq = [];
    for(let char of str1) {
        freq[char] = freq[char] ? freq[char]++ : 1;
    }

    for(let char of str2) {
        if (freq[char]) freq[char] = freq[char]--;
        else return false;
    }
    return true;
}

const s1 = 'listen', s2 = 'silent';
if(isAnagram(s1,s2)) console.log('Is a anagram');
else console.log('Is not a anagram');