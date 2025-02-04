const obj = { name: "Alice" };
Object.freeze(obj);
obj.name = "Bob"; //cannot modify the property in freeze
console.log(obj);

const obj2 = { age: 25 };
Object.seal(obj2);
obj2.age = 30; // modify the property
obj2.city = "NY"; //cannot add new property in seal
console.log(obj2);