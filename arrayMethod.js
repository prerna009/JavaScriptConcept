const arr = [1,2,3,4,5];
arr.forEach(num => console.log(num*2));

const doubled = arr.map(num => num*2);
console.log(doubled);

const even = arr.filter(even=> even%2===0);
console.log(even);