var myAtoi = function(s) {
    let num=0,sign=1,i=0;
    for(;i<s.length && s[i]===' ';i++){}
    if(i<s.length && (s[i] === '+' || s[i] === '-')){
        sign = (s[i]==='-')?-1:1;
        i++;
    }
    for(;i<s.length;i++){
        if(s[i]>='0' && s[i]<='9'){
            num = num *10 + (s[i]-'0');
        } else{
            break;
        }
    }
    num*=sign;
    if(num < (-2)**31){
        return (-2)**31;
    }
    if(num > (2**31)-1){
        return (2**31)-1;
    }
    return num;
};
const str = "42";
console.log(myAtoi(str));