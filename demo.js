let greeting="Hello World,Greetings to all,Keep Learning and Practicing!";
console.log(greeting);

let fruits=['mango','banana','apple'];
let [a,b,c]=fruits;
console.log(a,b,c); //array destructuring

let person={name:"prerna",age:22};
let {name,age}=person;
console.log(name,age);

function getMobile(manufacturer,model,year){
    return{
        manufacturer,
        model,
        year
    }
}
let x=getMobile("Samsung","Galaxy",2020);
console.log(x);

let async=new Promise((resolve,reject)=>{
    let a=12,b=0;
    console.log(a/b);
    resolve();
}).then(()=>{
    console.log("DON!");
})