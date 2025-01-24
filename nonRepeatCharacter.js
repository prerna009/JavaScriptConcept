//first non repeating character of string

function nonRepeatCharacter(str){
    debugger
    let freq={};
    for(let i=0;i<str.length;i++){
        if(freq[str[i]]){
            freq[str[i]]++;
        }
        else{
            freq[str[i]]=1;
        }
    }
    for(let j=0;j<str.length;j++){
        if(freq[str[j]]===1){
            return str[j];
        }
    }
}
const str = 'prerna';
console.log(nonRepeatCharacter(str));