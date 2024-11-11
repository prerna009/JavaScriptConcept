//Named function
function greet() {
    console.log("Hello JavaScript");
}
greet();

//Function Expression
const sum = function (a, b) { return a + b; }
console.log(sum(3, 7));

//Arrow function
const square = (x) => x * x;
console.log(square(4));

//IIFE
(function (a, b) {
    console.log("sum=" + (a + b));
})(6, 8);

//Generator Function
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
const gen = idGenerator();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
console.log(gen.next().value); // Output: 3

//Async Function
async function fetchData() {
    let myPromise = new Promise(function (resolve) {
        resolve("Hello World!!!");
    });
    let data = await myPromise;
    return data;
}
fetchData().then(data => console.log(data));

// async function myDisplay() {
//     let myPromise = new Promise(function(resolve) {
//       resolve("I love You !!");
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
//   }
//   myDisplay();

//constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person = new Person("John", 32);
console.log(`Person name is ${person.name} and age is ${person.age}`);

//callback function
function fetching(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "Alice" };
        callback(data);
    }, 2000); // Simulating a delay of 2 seconds
}

fetching((data) => {
    console.log("Data received:", data);
});

//Pure Function-
//This function will always return the same result when given the same inputs.
const add=(a,b)=>{return a+b;}
console.log("Adding of two numbers :"+add(3,7));

//Impure function
let counter=0;
function incrCounter(){
    counter++;
}
incrCounter();
console.log(`Counter value : ${counter}`);
incrCounter();
console.log(`Counter value : ${counter}`);

//Higher-order function
//example of map function of higher order function.
const arr = [1, 2, 3, 4, 5];
const output = arr.map((num) => num += 10) 
console.log(output); // [11, 12, 13, 14, 15]

//example of filter function
const arr1=[1,2,3,4,5];
const output1=arr1.filter((num)=>num%2) //find out odd number
console.log(output1);

//reduce exAMPLE
const numbers = [1, 2, 3, 4, 5];

const sum1 = numbers.reduce((total, currentValue) => {
    return total + currentValue;
}, 0)
console.log(sum1); 

//forEach loop/function in angular Example
const numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach((num) => console.log(num));

