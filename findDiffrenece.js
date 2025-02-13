function differenceOfString(str1,str2){
    let freq = [];
    for(let char1 of str1){
        (freq[char1]) ? freq[char1]++ : freq[char1]=1; 
    }
    for(let char2 of str2){
        if(freq[char2]) freq[char2]--;
        else return char2;
    }
}

const str1 = "",str2="y";
console.log(differenceOfString(str1,str2));