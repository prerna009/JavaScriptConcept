var addDigits = function (num) {
    let sum = 0;
    while (num > 0 || sum > 9) {
        if(num===0){
            num = sum;
            sum = 0;
        }
        sum += num%10;
        num = Math.floor(num / 10);
    }
    return sum;
};
const number = 38;
console.log(addDigits(number));