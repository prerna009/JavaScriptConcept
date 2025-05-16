//Example a recursive fibonacci function.
//Memoization is particularly effective for recursive functions, 
// significantly reducing the number of calculations.

function memoizeFibonacci(fn){
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(...args);
        if(cache[key]) return cache[key];
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

const fibonacci = memoizeFibonacci(n => (n <= 1 ? n : fibonacci(n-1) + fibonacci(n-2)));
console.log(fibonacci(50)); //faster than recalculating each time