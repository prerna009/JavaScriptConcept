// first unique character of string.

function nonRepeatCharacter(str){
    let freq={},index=-1;
    for(let i=0;i<str.length;i++){
        (freq[str[i]]) ? freq[str[i]]++ : freq[str[i]]=1;
    }
    for(let j=0;j<str.length;j++){
        if(freq[str[j]]===1) return j;
    }
    return index;
}
const str = 'loveleetcode';
console.log(nonRepeatCharacter(str));