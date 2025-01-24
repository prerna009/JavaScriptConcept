function frequencyOfCharacter(str){
    let freq={};
    str = str.toLowerCase();
    for(let char of str){
       freq[char] = (freq[char] || 0 ) + 1;
    }
    let freqArray = Object.entries(freq).sort((a,b)=>b[1]-a[1]);
    let result = '';
    for(let [char,count] of freqArray){
        result += char+count;
    }
    return result;
}
const str = 'Engineer';
console.log(frequencyOfCharacter(str));