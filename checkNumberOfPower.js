//First approach for all the base
function checkBase(n){
    while(n>2){
        n = n/2;
    }
    return (n==2) ? true : false;
}
const number = 18;
console.log(checkBase(number));

//Bit manipulation for base 4
let num = 4;
console.log(((num & (num-1))==0 & (num-1)%3)==0);