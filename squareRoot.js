// WAP for getting a square root of a given number.

function sqrt(num){
    num=num**(1/2) | 0;
    return num;
}
const number=9;
console.log(`Square root of ${number} is : `,sqrt(number));