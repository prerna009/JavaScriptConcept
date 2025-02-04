let obj1 = { a: 1, b: { c: 2 } };
let shallowCopy = { ...obj1 };
shallowCopy.b.c = 500;
console.log(obj1.b.c); // 100 (Shallow copy affects original)

let deepCopy = JSON.parse(JSON.stringify(obj1));
deepCopy.b.c = 200;
console.log(obj1.b.c); // 100 (Deep copy does not affect original)