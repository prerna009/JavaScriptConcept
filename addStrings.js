//Given two non-negative integers, num1 and num2 represented as string, 
// return the sum of num1 and num2 as a string.
// Without using BigInt or direct converts.

function addString(num1, num2) {
    let result = '',carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;
    while (i >= 0 || j >= 0 || carry) {
        const digit1 = i >= 0 ? num1[i] - '0' : 0;
        const digit2 = j >= 0 ? num2[j] - '0' : 0;  
        let sum = digit1 + digit2 + carry;  
        carry = Math.floor(sum / 10); 
        result = (sum % 10) + result;  
        i--;  
        j--;  
    }
    return result;  
}

const num1 = "9333852702227987";
const num2 = "85731737104263";
console.log(addString(num1, num2));  