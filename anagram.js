function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let counter={};
    for (let char of str1) {
        if(counter[char]>0) counter[char]++;
        else counter[char]=1;
    }
    for (let char2 of str2) {
        if(counter[char2]>0) counter[char2]--;
        else{
            console.log('Not a anagram.');
            return false;
        }
    }
    console.log('Is a anagram.');
    return true;
}

let str1 = 'lishhten';
let str2 = 'slikjent';
console.log(isAnagram(str1,str2));