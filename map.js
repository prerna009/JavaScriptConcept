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