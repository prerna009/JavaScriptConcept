var isPalindrome = function(num) {
    let rev=0,temp=num;
    while(num>0){
        rev = rev*10 + (num%10);
        num = num/10 |0;
    }
    return rev==temp;
};
console.log(isPalindrome(123));