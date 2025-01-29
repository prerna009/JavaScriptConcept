var divide = function(dividend, divisor) {
    if (dividend==-2147483648 && divisor==-1) return (dividend/divisor)-1;
    return parseInt(dividend/divisor);
};
const dividend=-2147483648,divisor=-1;
console.log(divide(dividend,divisor));