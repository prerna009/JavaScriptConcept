//first non repeating character of string

function nonRepeatCharacter(str){
    let freq={};
    for(let i=0;i<str.length;i++){
        (freq[str[i]]) ? freq[str[i]]++ : freq[str[i]]=1;
    }
    for(let j=0;j<str.length;j++){
        if(freq[str[j]]===1) return str[j];
    }
    return -1;
}
const str = 'aaggbs';
console.log(nonRepeatCharacter(str));