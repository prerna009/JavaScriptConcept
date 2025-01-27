// function obj(person){
//     for(let p in person){
//         if(typeof person[p] === 'object'){
//             arr.push(p);
//             obj(person[p]);
//         }
//         else{
//             arr.push(p);
//         }
//     }
//     return arr;
// }

// let arr=[];
// const per={
//     name:"Prerna",
//     details:{
//         age:22,
//         gender:"female",
//         hobbies:["Dancing","Singing"],
//     }
// }
// console.log(obj(per));

//nested cloning
let user = {
    name:'John',
    sizes:{
        height:182,
        width:50
    }
};
let clone = Object.assign({},user);
console.log(user.sizes === clone.sizes); //true same objects
user.sizes.width = 60;
console.log(clone.sizes.width); // 60

//structured clone or deep cloning
let user2 = {
    name:'Anil',
    sizes:{
        height:182,
        width:50
    }
};
let deepClone = structuredClone(user2);
console.log(user2.sizes  === deepClone.sizes); //false, different objects
user2.sizes.width = 60;
console.log(deepClone.sizes.width); //50

