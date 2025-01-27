//Perfrom set methods and properties

let set = new Set();
set.add('prerna');
set.add(12);
set.add('female');
set.add(12);
console.log(set);
set.add('female');
set.add('sumeet');
console.log(set);
set.delete('female');
console.log(set);
console.log(set.has('sumeet'));
console.log(set.size);

for(let value of set){
    console.log(value);
}

set.forEach((value) => {
    console.log(value);
});

//Perform weakset

let weakSet = new WeakSet();
let john = {name : 'John'};
let peter = {name : 'peter'};
let mary = {name : 'mary'};

weakSet.add(john);
weakSet.add(peter);
weakSet.add(john);
console.log(weakSet.has(john));
console.log(weakSet.has(mary));
john=null;
console.log(weakSet.has(john));


