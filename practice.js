const a = 4, b = 5;
const number = 9;
const originalArr = [3, 67, 903, 122, 90, 112, 33];
const originalStr = 'Radar Malayalam Radar';

//1. Write a JavaScript function to calculate the sum of two numbers.  
function sumOfNumbers(a, b) {
    return a + b;
}
console.log(`Sum of ${a} and ${b} is`, sumOfNumbers(a, b));

//2. Write a JavaScript program to find the maximum number in an array. 
function maxNumber(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log('Maximum Number of array is', maxNumber(originalArr));

//3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 
function isPalindrome(str) {
    str = str.toLowerCase();
    let temp = '';
    for (let i = str.length - 1; i >= 0; i--) {
        temp += str[i];
    }
    return temp === str;
}
if (isPalindrome(originalStr)) console.log('String is palindrome.');
else console.log('String is not a palindrome.');

//4. Write a JavaScript program to reverse a given string. 
function reverseStr(str) {
    let temp = [];
    for (let i = str.length - 1; i >= 0; i--) {
        temp += str[i];
    }
    return temp;
}
console.log(`Reverse of given string ${originalStr} is`, reverseStr(originalStr));

// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 
function evenNumbers(arr) {
    let newArr = [], index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArr[index] = arr[i];
            index++;
        }
    }
    return newArr;
}
console.log('Even numbers in the array is', evenNumbers(originalArr));

//6. Write a JavaScript program to calculate the factorial of a given number. 
function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}
console.log(`Factorial of ${number} is`, factorial(number));

//7. Write a JavaScript function to check if a given number is prime. 
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= num ** (0.5) | 0; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
if (isPrime(number)) console.log(`${number} is a prime number.`);
else console.log(`${number} is not a prime number.`);

//8. Write a JavaScript program to find the largest element in a nested array. 
// function findLargestElement(nestedArr) {
//     let largestNum = nestedArr[0][0];
//     for (let arr of nestedArr) {
//         for (let num of arr) {
//             if (num > largestNum) {
//                 largestNum = num;
//             }
//         }
//     }
//     return largestNum;
// }
// const nestedArr = [23, 67, 433, 2, [45, 899, 90, 8]];
// console.log(`Largest number in the nested array is`, largestNumberInNestedArray(nestedArr));

//9. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 
function fibonacci(num) {
    let fibo = [];
    for (let i = 0; i < num; i++) {
        if (i === 0) fibo[i] = 0;
        else if (i === 1) fibo[i] = 1;
        else fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
console.log(fibonacci(number));
