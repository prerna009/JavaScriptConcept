let user = {
    name : 'prerna',
    age  : 22,
    gender : 'female',
    hobbies : ['dancing','drawing']
};

let json = JSON.stringify(user);
console.log(json);
console.log(typeof json);

let obj = JSON.parse(json);
console.log(obj);
console.log(typeof obj);

