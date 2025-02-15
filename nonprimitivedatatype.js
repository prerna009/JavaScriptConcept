//object methods
let obj = {a:1,b:2,c:3};
console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

let target = {x:1}, source = {y:2};
console.log(Object.assign(target,source)); //source properties copying in the target
console.log(target);

let person = {name: "Alice"};
Object.freeze(person); //prevent changes
person.name = "Bob";  // Ignored
console.log(person.name);  // "Alice"

let obj2 = {name: "Alice"};
Object.seal(obj2); //prevent adding or deleting but modify the existing properties of obj
obj2.age = 25;  // Ignored
obj2.name = "Bob";  // Allowed
console.log(obj2);  // {name: "Bob"}
console.log(obj2.hasOwnProperty('name'));  // true
console.log(obj2.hasOwnProperty('age'));   // false

let obj3 = {};
console.log(Object.getPrototypeOf(obj3));  // [Object: null prototype] {}

let animal = {eat:'roti'};
let dog = {};
Object.setPrototypeOf(dog,animal);
console.log(dog.eat); //'roti'

// Array methods
let arr = [1, 2, 3];
arr.push(4,1,6);
console.log(arr);  // [1, 2, 3, 4, 1, 6]
console.log(arr.pop()); //6
console.log(arr); // [1, 2, 3, 4, 1]
console.log(arr.shift()); //1
console.log(arr);  // [2, 3, 4, 1]
arr.unshift(13);
console.log(arr.slice(1, 4));  // [2, 3, 4]
console.log(arr);              // [13, 2, 3, 4, 1]
arr.splice(2,0,3,4);
console.log(arr);  // [13, 2, 3, 4, 3, 4, 1]

arr.splice(2);  
console.log(arr);  // [13, 2]

let arr1 = [1,2], arr2 = [67,90], arr3 = [9,0];
let merged = arr1.concat(arr2).concat(arr3);
console.log(merged);

let fruits = ["apple", "banana", "cherry"];
console.log(fruits.indexOf("banana"));  // 1
console.log(fruits.indexOf("grape"));   // -1
console.log(fruits.includes('banana'));  // true
console.log(fruits.includes('grape'));  // false
console.log(fruits.join(', ')); // "apple, banana, cherry"

// Higher order array methods
let newArr = [1, 2, 3,4,5];
newArr.forEach(num => console.log(num * 2));  

let doubled = newArr.map(num => num * 2); // return array
console.log(doubled);  // [2, 4, 6, 8, 10]

let filtered = newArr.filter(num => num > 3); //return array
console.log(filtered);  // [4, 5]

let sum = newArr.reduce((acc, num) => acc + num, 0);
console.log(sum);  // 15

let found = newArr.find(num => num > 3);
console.log(found);  // 4

console.log(newArr.findIndex(num => num > 3)); // 3

let sort = newArr.sort((a,b)=>b-a); // sort in descending order
console.log(sort); // [5, 4, 3, 2, 1]

console.log(newArr.reverse()); // [1,2,3,4,5]

let numbers = [1, 2, 3, 4, 5];
let result = numbers.filter(num => num % 2 === 0).map(num => num * 10);
console.log(result); // [20, 40]

let a = 5;
let b = "5";
console.log(a == b);   // true
console.log(a === b);  // false
console.log(a !== b);  // true
console.log(a > 3 && b < 7);  // true