//call(), apply() and bind() example.

const person = {name:"Alice"};
function greet(greeting){
    console.log(greeting + ', ' + this.name);;
}
greet.call(person,'Hello');
greet.apply(person,['Hii']);

const boundGreet = greet.bind(person,'Hey');
boundGreet();