//First approach
var addDigits = function (num) {
    while(num>=10){
        let sum = 0;
        while (num > 0) {
            sum += num%10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num;
};

//Second approach
var addDigits = function (num) {
    if (num === 0) return 0;
    return num % 9 === 0 ? 9 : num % 9; 
};

const number = 2345637;
console.log(addDigits(number));