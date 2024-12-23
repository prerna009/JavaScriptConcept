//WAP to reverse an integer without converting it to a string, without using any built-in methods.

function reverseNumber(num){
    let rev=0;
    while(num>0){
        rev=rev*10+(num%10);
        num=parseInt(num/10);
    }
    return rev;
}
const number=1091;
console.log("Reverse number = ",reverseNumber(number));