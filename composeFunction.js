// combining smaller functions.

const add = x => x + 2;
const multiply = x => x * 3;

const compose = (f,g) => x => f(g(x));
const c = compose(add, multiply);
console.log(c(5)); // add(multiply(10)) => 10*3 => 30 + 2 => 32