function alternatePattern(str) {
    let temp = '', a = 0;
    for (let i = 0; i < str.length; i++) {
        if (a % 2 === 0 && str[i] !== ' ') {
            temp += 'Fizz';
            a++;
        } else if (a % 2 !== 0 && str[i] !== ' ') {
            temp += 'Buzz';
            a++;
        } else if (str[i] === ' ') {
            temp += ' FizzBuzz ';
        }
    }
    return temp;
}

const originalStr = 'Hello World';
console.log(alternatePattern(originalStr));