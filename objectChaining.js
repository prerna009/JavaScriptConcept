//Method chaining
const user = {
    name:'Prerna',
    setName(name){
        this.name = name;
        return this;
    },
    greet(){
        console.log(`Hello, my name is ${this.name}`);
        return this;
    }
};
user.setName('Jyoti').greet(); //Hello, my name is Jyoti
console.log(user.name); //Jyoti

//chaining with multiple methods
const calculator = {
    value:0,
    add(n){
        this.value += n;
        return this;
    },
    subtract(n){
        this.value -= n;
        return this;
    },
    multiply(n){
        this.value *= n;
        return this;
    },
    divide(n){
        if(n!==0) this.value /= n;
        return this;
    },
    print(){
        console.log(`Result: ${this.value}`);
        return this;
    }
};
calculator.add(23).subtract(8).multiply(15).divide(3).print(); //Result: 75

//chaining with constructor functions
function Person(name){
    this.name = name;
}
Person.prototype.setAge  = function (age){
    this.age = age;
    return this;
};
Person.prototype.setCity  = function (city){
    this.city = city;
    return this;
};
Person.prototype.introduce = function (){
    console.log(`Hi, I'm ${this.name}, ${this.age} years old from ${this.city}`);
    return this;
};
new Person('Kiran').setAge(22).setCity('Mumbai').introduce();

//chaining with classes
class Car{
    constructor(brand){
        this.brand = brand;
    }
    setSpeed(speed){
        this.speed = speed;
        return this;
    }
    setAccelerate(amount){
        this.speed += amount;
        return this;
    }
    setBrake(amount){
        this.speed -= amount;
        return this;
    }
    totalSpeed(){
        console.log(`${this.brand} is running at ${this.speed}km/h`);
        return this;
    }
}
const myCar = new Car("Nano");
myCar.setSpeed(20).setAccelerate(180).setBrake(160).totalSpeed(); //40km/h

const myCar2 = new Car("BMW");
myCar2.setSpeed(90).setAccelerate(90).setBrake(180).totalSpeed(); //0km/h

//chaining with promises
function asyncTask(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task completed");
        }, 5000);
    });
}

asyncTask().then((msg) => {
    console.log(msg);
    return "New Task";
}).then((msg) => console.log(msg)).catch((err) => console.error(err));