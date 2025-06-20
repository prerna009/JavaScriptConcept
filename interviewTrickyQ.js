//Tricky question - 1
// console.log('first');
// setTimeout(() => {
//     console.log('second');
// });
// console.log('third');

function printOne() {
    console.log('first');
    printTwo();
}

function printTwo() {
    setTimeout(() => {
        console.log('second');
        printThree();
    });
}

function printThree() {
    console.log('third');
}

printOne(); //call the first function

//Tricky Q-2

let a = b = c = { value: 1 };
a.value = 2;
b = { value: 3 };
c.temp = 4;

console.log(a) // { value: 2, temp: 4}
console.log(b) // { value: 3 }
console.log(c) // { value: 2, temp: 4}

//Tricky Q-3
var x = 23;
(function () {
    var x = 43;
    (function random() {
        x++;
        console.log(x);
        var x = 21;
    })();
})(); //NaN

//Tricky Q-4

const personOne = {
    fName: "Irfan",
    lName: "Pathan"
}

personOne.fName = "Yusuf";
personOne.age = 40;
console.log(personOne); //{ fName: 'Yusuf', lName: 'Pathan', age: 40 };

//Tricky Q-5
const personTwo = Object.freeze({
    fName: "Irfan",
    lName: "Pathan",
    address: {
        city: "chennai",
        state: "tamil nadu"
    }
});

personTwo.fName = "Yusuf";
personTwo.age = 40;
personTwo.address.city = "gurugram";
personTwo.address.state = "haryana";

console.log(personTwo);
// { fName: 'Irfan', lName: 'Pathan', address: { city: 'gurugram', state: 'harayan' }}

//Tricky Q-6
const person = {
    firstName: "John",
    lastName: "Doe",
    display: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}

const display = person.display.bind(person);

function executeFunction(funcName) {
    funcName();
}

executeFunction(display); //John Doe


//Trcikky Q-7
for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i)), 0
} // 5 5 5 5 5 