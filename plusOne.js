var plusOne = function (digits) {
    let num = '';
    for(let i=0;i<digits.length;i++){
        num += digits[i];
    }
    num = BigInt(num) + BigInt(1);
    digits = num.toString().split('').map(Number);
    return digits;
};

const digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
console.log(plusOne(digits));