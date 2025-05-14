// example
let xmax = 1;

if (function f() {}) {
  xmax += typeof f;
}

console.log(xmax); // 1undefined