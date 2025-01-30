//First approach for all the base
function checkBase(n,x){
    if(x==1) return true;
    while(n>x){
        n = n/x;
    }
    return (n==x) ? true : false;
}
const number = 81,power = 3;
console.log(checkBase(number,power));

//Bit manipulation for base 2
let num = 16;
if(num<=0) return false;
console.log((num & (num-1))==0);