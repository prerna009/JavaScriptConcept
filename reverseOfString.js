//Find the reverse of the string.

function reverseOfString(str){
    let temp='';
    for(let i=str.length-1;i>=0;i--){
        temp+=str[i];
    }
    return temp;
}
const originalString='Prerna Gupta';
console.log("Reverse of string : ",reverseOfString(originalString));