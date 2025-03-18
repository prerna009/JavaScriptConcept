//Perform map methods and properties

let map = new Map(); //create new map
map.set('name', 'prerna'); //store the value by the key
map.set('age', 22);
console.log(map.get('age')); //get the value by the key
console.log(map.has('prerna')); //check key is present or not
map.delete('age'); //delete the value using key
console.log(map.get('age')); //undefined key is not present
map.clear(); //clear the map
console.log(map); //map is empty
map.set('name', 'sumeet');
map.set('gender', 'male');
console.log(map.size);

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);  

for(let vegetable of recipeMap.keys()){
    console.log(vegetable);  
}

for(let price of recipeMap.values()){
    console.log(price);
}

for(let entries of recipeMap){
    console.log(entries);  
}

recipeMap.forEach((value,key) => {
    console.log(`${key}: ${value}`);   
});


//Perform weakmap

let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj,'prerna');
console.log(weakMap);
weakMap.set({},'prerna');
console.log(weakMap.has(obj));

//Map with async
const arr = [1,2,3];
const asyncRes = await Promise.all(arr.map(async(i) => {
    return i+1;
}));
console.log(asyncRes); // [2,3,4]

//Map with async example -2

const numbers = [1,2,3];
const asyncFunction  = async (num) => { 
    return num*2;
};
const processNumbers = async () => {
    const result = await Promise.all(numbers.map(asyncFunction));
    console.log(result);
};
processNumbers();

//Map with using for...of
const numbers2 = [1,2,3];
const asyncFunction2 = async (num) => {
    return new Promise((resolve) => setTimeout(() => resolve(num*2),100));
};
const processNumbers2 = async () => {
    const results = [];
    for(const num of numbers2){
        results.push(await asyncFunction2(num));
    }
    console.log(results);
};
processNumbers2();