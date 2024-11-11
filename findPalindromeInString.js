//WAP to find the given string is Palindrome or not.

function isPlaindrome(str){
    let newStr=str.replace(/\s+/g,"").toLowerCase();
    let temp="";
    for(let i=newStr.length-1;i>=0;i--){
        temp+=newStr[i];
    }
    return temp===newStr;
}
const str="Radair";
if(isPlaindrome(str)){
    console.log("String is palindrome.");
}
else{
    console.log("String is not a palindrome.");
}