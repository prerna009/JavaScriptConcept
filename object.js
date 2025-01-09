function obj(person){
    for(let p in person){
        if(typeof person[p] === 'object'){
            arr.push(p);
            obj(person[p]);
        }
        else{
            arr.push(p);
        }
    }
    return arr;
}

let arr=[];
const per={
    name:"Prerna",
    details:{
        age:22,
        gender:"female",
        hobbies:["Dancing","Singing"],
    }
}
console.log(obj(per));