var reverse = function(num){
    let rev =0;
    while(num){
        let r = num%10;
        rev = rev*10 + r;
        num = num/10 | 0;
    }
    if(rev < (-2)**31 || rev > (2**31)-1){
        return 0;
    }
    return rev;
}

const number=-87487778;
console.log(reverse(number));