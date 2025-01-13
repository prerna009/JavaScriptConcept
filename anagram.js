function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let c1 = {}, c2 = {};

    for (let i = 0; i < str1.length; i++) {
        c1[str1[i]] = (c1[str1[i]] || 0) + 1;
    }

    for (let i = 0; i < str2.length; i++) {
        c2[str2[i]] = (c2[str2[i]] || 0) + 1;
    }

    for (let char in c1) {
        if (c1[char] !== c2[char]) {
            return false;
        }
    }

    return true;
}

let str1 = 'listen';
let str2 = 'slixsent';
console.log(isAnagram(str1,str2));