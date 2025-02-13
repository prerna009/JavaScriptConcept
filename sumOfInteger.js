//sum of integer without using operator.

var getSum = function(a, b) {
    while(b!==0){
        let carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
};

const a = 1, b = 2;
console.log(getSum(a,b));