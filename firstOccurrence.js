//Find the first occurrence of the string.

var strStr = function(str1, str2) {
    let index = -1;
    for(let i=0;i<str1.length - str2.length;i++){
        let word='';
        let j=0;
        while(j<str2.length && str1[i+j]===str2[j]){
            word+=str1[i+j];
            j++;
        }
        if(word===str2) index = i;
    }
    return index;
};

const str1 = "hello";
const str2 = "ll";
console.log(strStr(str1,str2));