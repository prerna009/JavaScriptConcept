//Find the reverse of the string.

function reversestring(str){
    let temp="";
    for(let i=str.length-1;i>=0;i--){
        temp+=str[i];
    }
    return temp;
}
const str="Prerna";
console.log("Reverse String : "+reversestring(str));