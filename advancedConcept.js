// 1. Closures

function outerFunction(name) {
    let a = 'Hello';
    function innerFunction() {
        console.log(`${a} ${name}`);
    }
    return innerFunction();
}

outerFunction('Prerna');
outerFunction('Gauri');

//2. Prototypal Inheritance

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}

const person1 = new Person('Prerna');
person1.greet();

//3. Asynchronous Operation - Promises, Callback, Async/await

//Promises - 

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 500);
    });
}

fetchData().then(data => console.log(data));

//aync/await - 

async function data() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched successfully!');
        }, 1000);
    });
}

async function processData() {
    const mydata = await data();
    console.log(mydata);
}

processData();

//3. Higher-order function

function operate(func, num1, num2) {
    return func(num1, num2);
}

function add(a, b) {
    return a + b;
}

console.log('Addition of a and b is ' + operate(add, 23, 90));

//4. Memoization

function memoize(func) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        } else {
            const result = func(...args);
            cache[key] = result;
            return result;
        }
    }
}

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(5)); 