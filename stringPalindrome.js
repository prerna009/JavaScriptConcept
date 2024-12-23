//WAP to find the given string is Palindrome or not.

function stringPalindrome(str){
    let temp='';
    let char=str.toLowerCase();
    for(let i=char.length-1;i>=0;i--){
        temp+=char[i];
    }
    return char==temp;
}
const originalString='madam';
if(stringPalindrome(originalString)){
    console.log("String is Plaindrome.");
}
else{
    console.log("String is not a palindrome.");
}